<script>
  let { href = "", name = "" } = $props();
</script>

<a
  {href}
  class="rounded-3xl bg-teal-800 px-4 py-2 font-semibold text-white hover:bg-teal-900 hover:text-white hover:underline dark:bg-pink-800 dark:text-slate-100 dark:hover:bg-pink-900 md:px-6 md:py-2.5 md:text-lg"
  >{name}</a
>
