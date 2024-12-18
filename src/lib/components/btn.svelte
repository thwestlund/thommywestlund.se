<script lang="ts">
  export let name = "";
</script>

<button
  on:click
  class="rounded-3xl bg-teal-800 px-6 py-2.5 text-lg font-semibold text-white hover:bg-teal-900 hover:text-white dark:bg-pink-800 dark:text-slate-100 dark:hover:bg-pink-900"
>
  <slot>{name}</slot>
</button>
