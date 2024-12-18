<script lang="ts">
  export let name = "";
  export let cta = false;
  export { className as class };

  let className = "";
</script>

<button
  on:click
  class="{className} rounded-3xl px-4 py-2.5 font-semibold hover:bg-teal-900 hover:text-slate-100 dark:text-slate-100 dark:hover:bg-pink-900 md:px-6 md:py-2.5 md:text-lg {cta
    ? 'bg-teal-800 text-slate-100 dark:bg-pink-800'
    : ''}"
>
  <slot>{name}</slot>
</button>
