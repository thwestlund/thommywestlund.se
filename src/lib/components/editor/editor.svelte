<script lang="ts">
  import { createSvelteEditor } from "./svelteState";
  import { onMount } from "svelte";

  const editor = createSvelteEditor();

  const blockStyles = {
    text: "text-base",
    heading1: "text-4xl font-bold",
    heading2: "text-3xl font-bold",
    heading3: "text-2xl font-bold",
    bulletList: 'pl-4 before:content-["•"] before:mr-2',
    numberList: "pl-4",
    code: "font-mono bg-gray-100 p-2 rounded",
    quote: "pl-4 border-l-4 border-gray-300 italic",
  };

  const handleKeyDown = (
    e: KeyboardEvent & { currentTarget: HTMLDivElement },
    blockId: string,
  ) => {
    editor.state.caretPosition = getCaretPosition(e.currentTarget);
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      editor.handleEnter(blockId);
    } else if (e.key === "Backspace" && e.currentTarget.textContent === "") {
      e.preventDefault();
      editor.handleBackspace(blockId);
    } else if (e.key === " ") {
      //editor.handleMarkdownShortcut(blockId);
    }
  };

  /*const handlePaste = (e: ClipboardEvent & { currentTarget: HTMLDivElement }, blockId: string) => {
    e.preventDefault();
    const text = e.clipboardData?.getData('text/plain') || '';
    const lines = text.split('\n');
    const caretPos = getCaretPosition(e.currentTarget);
    
    if (lines.length > 1) {
      // For the first line, insert at caret position
      const currentBlock = $editor.blocks.find(b => b.id === blockId);
      if (currentBlock) {
        const beforeCaret = currentBlock.content.slice(0, caretPos);
        const afterCaret = currentBlock.content.slice(caretPos);
        editor.updateBlock(blockId, { content: beforeCaret + lines[0] });
        
        // Add remaining lines as new blocks
        let lastBlockId = blockId;
        for (let i = 1; i < lines.length; i++) {
          lastBlockId = editor.addBlock('text', lines[i], lastBlockId);
        }
        
        // Add remaining content from original block
        if (afterCaret) {
          editor.addBlock('text', afterCaret, lastBlockId);
        }
      }
    } else {
      const currentBlock = $editor.blocks.find(b => b.id === blockId);
      if (currentBlock) {
        const beforeCaret = currentBlock.content.slice(0, caretPos);
        const afterCaret = currentBlock.content.slice(caretPos);
        const newContent = beforeCaret + text + afterCaret;
        editor.updateBlock(blockId, { content: newContent });
        editor.setSelection(blockId, caretPos + text.length);
      }
    }
  };*/

  // Track active block element to sync content
  let activeBlock: HTMLDivElement | null = null;

  // Update block content only when input event fires
  const getCaretPosition = (element: HTMLElement): number => {
    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return 0;

    const range = selection.getRangeAt(0);
    const preCaretRange = range.cloneRange();

    preCaretRange.selectNodeContents(element);
    preCaretRange.setEnd(range.endContainer, range.endOffset);

    return preCaretRange.toString().length;
  };

  const handleInput = (
    e: Event & { currentTarget: HTMLDivElement },
    blockId: string,
  ) => {
    const content = e.currentTarget.textContent || "";
    const caretPos = getCaretPosition(e.currentTarget);
    editor.updateBlock(blockId, { content });
    editor.setSelection(blockId, caretPos);
  };

  // Handle focus management
  const handleFocus = (
    e: FocusEvent & { currentTarget: HTMLDivElement },
    blockId: string,
  ) => {
    activeBlock = e.currentTarget;
    const caretPos = getCaretPosition(e.currentTarget);
    editor.setSelection(blockId, caretPos);
  };

  const handleBlur = () => {
    activeBlock = null;
    editor.setSelection(null);
  };

  let mounted = false;
  onMount(() => {
    mounted = true;
    return () => {
      mounted = false;
    };
  });

  // Sync content with state when blocks change
  $: {
    if (mounted && $editor.blocks) {
      // Only update blocks when they're created or deleted
      window.requestAnimationFrame(() => {
        document.querySelectorAll("[data-block-id]").forEach((el) => {
          const blockId = el.getAttribute("data-block-id");
          const block = $editor.blocks.find((b) => b.id === blockId);
          // Only update if the element is empty (newly created block)
          console.log(block?.id, el.textContent);
          if (block && el !== activeBlock && !el.textContent) {
            el.textContent = block.content;
          }
        });
      });
    }
  }
</script>

<div
  class="min-h-screen w-full bg-white p-8"
  role="application"
  aria-label="Rich text editor"
>
  <div class="mx-auto w-full">
    {#each $editor.blocks as block (block.id)}
      <div class="mb-3">
        <div
          class="min-h-[1.5em] rounded-lg px-2 py-1 outline-none empty:before:pointer-events-none empty:before:text-gray-400 hover:bg-gray-50 focus:empty:before:content-[attr(data-placeholder)] {blockStyles[
            block.type
          ]} {$editor.selectedBlock === block.id ? 'ring-2 ring-blue-500' : ''}"
          data-placeholder="Write something here..."
          contenteditable="true"
          role="textbox"
          tabindex="0"
          aria-multiline="true"
          data-block-id={block.id}
          id={block.id}
          aria-label={`${block.type} block`}
          on:input={(e) =>
            handleInput(
              e as Event & { currentTarget: HTMLDivElement },
              block.id,
            )}
          on:keydown={(e) => handleKeyDown(e, block.id)}
          on:focus={(e) => handleFocus(e, block.id)}
          on:blur={handleBlur}
        >
          {block.content}
        </div>
      </div>
    {/each}
  </div>
</div>
