import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

import { Editor, type EditorStore, type EditorState } from "./editor";

// Svelte Implementation
export interface SvelteEditorStore extends EditorStore {
  subscribe: Writable<EditorState>["subscribe"];
}

export const createSvelteEditor = (): SvelteEditorStore => {
  const editor = new Editor();
  const { subscribe, set } = writable(editor.state);

  editor.subscribe((newState) => {
    set({ ...newState });
  });

  return {
    state: editor.state,
    subscribe,
    addBlock: editor.addBlock.bind(editor),
    updateBlock: editor.updateBlock.bind(editor),
    deleteBlock: editor.deleteBlock.bind(editor),
    setSelection: editor.setSelection.bind(editor),
    formatBlock: editor.formatBlock.bind(editor),
    handleEnter: editor.handleEnter.bind(editor),
    handleBackspace: editor.handleBackspace.bind(editor),
    //handleMarkdownShortcut: editor.handleMarkdownShortcut.bind(editor),
  };
};
