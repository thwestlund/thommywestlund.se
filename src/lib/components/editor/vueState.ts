// Vue Implementation
/*export const createVueEditor = (): EditorStore => {
  const editor = new Editor();
  const state = ref(editor.state);

  editor.subscribe((newState) => {
    state.value = { ...newState };
  });

  return {
    state: state as unknown as EditorState,
    addBlock: editor.addBlock.bind(editor),
    updateBlock: editor.updateBlock.bind(editor),
    deleteBlock: editor.deleteBlock.bind(editor),
    setSelection: editor.setSelection.bind(editor),
    formatBlock: editor.formatBlock.bind(editor),
    handleEnter: editor.handleEnter.bind(editor),
    handleBackspace: editor.handleBackspace.bind(editor),
    handleMarkdownShortcut: editor.handleMarkdownShortcut.bind(editor),
  };
};*/
