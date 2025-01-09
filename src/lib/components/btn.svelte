<script lang="ts">
  export let styling = "" as string;
  export let children: () => any;
  export let cta: boolean = false;
  export let onclick: (event: Event) => void = () => {}; // Accept the `onclick` handler as a prop
</script>

<button
  {onclick}
  class="{styling} rounded-3xl px-4 py-2.5 font-semibold hover:bg-teal-900 hover:text-slate-100 dark:text-slate-100 dark:hover:bg-pink-900 md:px-6 md:py-2.5 md:text-lg {cta
    ? 'bg-teal-800 text-slate-100 dark:bg-pink-800'
    : ''}"
>
  {@render children()}
</button>
