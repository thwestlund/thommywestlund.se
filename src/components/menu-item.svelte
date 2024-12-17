<script>
  let { href = "", name = "", active = false } = $props();
</script>

<a
  {href}
  class="rounded-3xl px-6 py-2.5 text-lg font-semibold hover:bg-teal-900 hover:text-white dark:text-slate-100 dark:hover:bg-pink-900 {active
    ? 'bg-teal-800 text-white dark:bg-pink-800 dark:text-slate-100'
    : ''}">{name}</a
>
