// Core Editor Types
interface EditorBlock {
  id: string;
  type:
    | "text"
    | "heading1"
    | "heading2"
    | "heading3"
    | "bulletList"
    | "numberList"
    | "code"
    | "quote";
  content: string;
  children?: EditorBlock[];
}

export interface EditorState {
  blocks: EditorBlock[];
  selectedBlock: string | null;
  caretPosition: number;
}

// Editor Interface for Framework Implementations
export interface EditorStore {
  state: EditorState;
  addBlock: (
    type: EditorBlock["type"],
    content?: string,
    afterId?: string,
  ) => string;
  updateBlock: (id: string, updates: Partial<EditorBlock>) => void;
  deleteBlock: (id: string) => void;
  setSelection: (blockId: string | null, caretPosition?: number) => void;
  formatBlock: (id: string, format: EditorBlock["type"]) => void;
  handleEnter: (blockId: string) => void;
  handleBackspace: (blockId: string) => void;
  //handleMarkdownShortcut: (blockId: string) => void;
}

// Core Editor Class
export class Editor {
  private _state: EditorState;
  private listeners: ((state: EditorState) => void)[];

  constructor() {
    this._state = {
      blocks: [
        {
          id: crypto.randomUUID(),
          type: "text",
          content: "",
        },
      ],
      selectedBlock: null,
      caretPosition: 0,
    };
    this.listeners = [];
  }

  get state(): EditorState {
    return this._state;
  }

  // State Management
  subscribe(listener: (state: EditorState) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  protected notify() {
    this.listeners.forEach((listener) => listener(this._state));
  }

  // Block Operations
  addBlock(
    type: EditorBlock["type"],
    content: string = "",
    afterId?: string,
  ): string {
    const newBlock: EditorBlock = {
      id: crypto.randomUUID(),
      type,
      content,
    };

    if (!afterId) {
      this._state.blocks.push(newBlock);
    } else {
      const index = this._state.blocks.findIndex(
        (block) => block.id === afterId,
      );
      if (index !== -1) {
        this._state.blocks.splice(index + 1, 0, newBlock);
      }
    }
    this.notify();
    return newBlock.id;
  }

  updateBlock(id: string, updates: Partial<EditorBlock>) {
    const block = this._state.blocks.find((block) => block.id === id);
    if (block) {
      Object.assign(block, updates);
      this.notify();
    }
  }

  deleteBlock(id: string) {
    const index = this._state.blocks.findIndex((block) => block.id === id);
    if (index !== -1) {
      this._state.blocks.splice(index, 1);
      if (this._state.blocks.length === 0) {
        this.addBlock("text");
      }
      this.notify();
    }
  }

  setSelection(blockId: string | null, caretPosition: number = 0) {
    this._state.selectedBlock = blockId;
    this._state.caretPosition = caretPosition;
    if (blockId) {
      const blockElement = document.getElementById(blockId);
      if (blockElement) {
        const range = document.createRange();
        const selection = window.getSelection();
        // Handle empty blocks
        if (blockElement.childNodes.length === 0) {
          blockElement.textContent = ""; // Ensure there's at least an empty text node
        }

        const textNode = blockElement.childNodes[0] || blockElement;
        const offset = Math.min(
          caretPosition,
          textNode.textContent?.length || 0,
        );

        range.setStart(textNode, offset);
        range.collapse(true);

        if (selection) {
          selection.removeAllRanges();
          selection.addRange(range);
        }
        blockElement.focus();
      }
    }
    this.notify();
  }

  formatBlock(id: string, format: EditorBlock["type"]) {
    const block = this._state.blocks.find((block) => block.id === id);
    if (block) {
      block.type = format;
      this.notify();
    }
  }

  handleEnter(blockId: string) {
    const block = this._state.blocks.find((block) => block.id === blockId);
    if (!block) return;

    // Use the current caret position from state
    const caretPos = this._state.caretPosition || 0;
    const contentBefore = block.content.slice(0, caretPos);
    const contentAfter = block.content.slice(caretPos);

    // Update current block with content before cursor
    this.updateBlock(blockId, { content: contentBefore });

    // Create new block with content after cursor
    const newBlockId = this.addBlock(block.type, contentAfter, blockId);

    // Set focus to start of new block
    this.setSelection(newBlockId, 0);
  }

  handleBackspace(blockId: string) {
    const block = this._state.blocks.find((block) => block.id === blockId);
    if (!block) return;

    if (this._state.caretPosition === 0 && this._state.blocks.length > 1) {
      const index = this._state.blocks.findIndex((b) => b.id === blockId);
      if (index > 0) {
        const previousBlock = this._state.blocks[index - 1];
        const newCaretPos = previousBlock.content.length;
        const newContent = previousBlock.content + block.content;
        this.updateBlock(previousBlock.id, { content: newContent });
        this.deleteBlock(blockId);
        this.setSelection(previousBlock.id, newCaretPos);
      }
    }
  }
}
