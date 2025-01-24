<script lang="ts">
  export let isOpen: boolean;
  export let onClose: () => void;

  import { onMount } from "svelte";

  let modalWrapper: HTMLDivElement | null = null;

  // Flytta fokus till dialogrutan när den öppnas
  $: if (isOpen && modalWrapper) {
    modalWrapper.focus();
  }

  // Hantera stängning med Escape-tangenten
  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };
</script>

{#if isOpen}
  <div
    bind:this={modalWrapper}
    tabindex="-1"
    role="dialog"
    aria-labelledby="modal-title"
    aria-hidden={!isOpen}
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    on:keydown={handleKeydown}
  >
    <div class="relative w-11/12 max-w-md rounded-lg bg-white p-6 shadow-lg">
      <button
        on:click={onClose}
        class="rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
      >
        Stäng
      </button>
    </div>
  </div>
{/if}
