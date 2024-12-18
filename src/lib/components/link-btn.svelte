<script>
  let { href = "", name = "" } = $props();
</script>

<a
  {href}
  class="rounded-3xl bg-teal-800 px-6 py-2.5 text-lg font-semibold text-white hover:bg-teal-900 hover:text-white hover:underline dark:bg-pink-800 dark:text-slate-100 dark:hover:bg-pink-900"
  >{name}</a
>
