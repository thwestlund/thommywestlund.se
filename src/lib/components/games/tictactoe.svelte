<!-- src/routes/+page.svelte -->
<script lang="ts">
  import type { Player, Board, WinningLine } from '$lib/assets/models/iTicTacToe';

  let board: Board = $state(Array(9).fill(null));
  let currentPlayer: Player = $state('X');
  let winner: Player = $state(null);
  
  let winningLine = $derived.by((): WinningLine => calculateWinningLine(board));
  let isDraw = $derived.by((): boolean => !winner && board.every(cell => cell !== null));

  function handleClick(index: number): void {
    if (board[index] || winner) return;
    board[index] = currentPlayer;
    
    if (winningLine) {
      winner = currentPlayer;
      return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }

  function resetGame(): void {
    board = Array(9).fill(null);
    currentPlayer = 'X';
    winner = null;
  }

  function calculateWinningLine(currentBoard: Board): WinningLine {
    const lines: [number, number, number][] = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const [a, b, c] of lines) {
      if (currentBoard[a] && 
          currentBoard[a] === currentBoard[b] && 
          currentBoard[a] === currentBoard[c]) {
        return [a, b, c];
      }
    }
    return null;
  }

  // Type guard to check if a cell is in the winning line
  function isWinningCell(index: number): boolean {
    return winningLine?.includes(index) ?? false;
  }

  // Helper to get cell classes
  function getCellClasses(index: number): string {
    return `
      aspect-square text-4xl font-bold border-2 border-gray-400 rounded
      transition-colors duration-200 enabled:hover:bg-gray-100
      disabled:cursor-not-allowed
      ${isWinningCell(index) ? 'bg-green-200' : 'bg-white'}
    `.trim();
  }

  // Helper to get player text color
  function getPlayerColor(player: Player): string {
    switch (player) {
      case 'X': return 'text-blue-600';
      case 'O': return 'text-red-600';
      default: return '';
    }
  }
</script>

<main class="flex flex-col items-center gap-8 p-8 min-h-screen bg-gray-100">
  <h1 class="text-4xl font-bold text-gray-800">Tic Tac Toe</h1>
  
  <div class="text-2xl font-semibold text-gray-700">
    {#if winner}
      <span class="text-green-600">Spelare {winner} vinner!</span>
    {:else if isDraw}
      <span class="text-orange-500">Spelet slutade oavgjort!</span>
    {:else}
      Aktiv spelare: <span class={getPlayerColor(currentPlayer)}>{currentPlayer}</span>
    {/if}
  </div>

  <div class="grid grid-cols-3 gap-2 max-w-md w-full">
    {#each board as cell, i (i)}
      <button 
        class={getCellClasses(i)}
        onclick={() => handleClick(i)}
        disabled={cell !== null || winner !== null}
        aria-label={cell ? `Cell ${i + 1}, occupied by ${cell}` : `Cell ${i + 1}, empty`}
      >
        <span class={getPlayerColor(cell)}>
          {cell ?? ''}
        </span>
      </button>
    {/each}
  </div>

  <button 
    class="px-6 py-3 text-lg font-semibold text-white bg-blue-600 
           rounded-lg shadow-md hover:bg-blue-700 
           transition-colors duration-200"
    onclick={resetGame}
  >
    Nytt spel
  </button>
</main>