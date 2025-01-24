<script>
  import Icon from "@iconify/svelte";

  let { href = "", name = "", newTab = true } = $props();
</script>

<a
  {href}
  target={newTab ? "_blank" : "_self"}
  class="flex flex-row items-center gap-1 rounded-3xl bg-teal-800 px-4 py-2.5 font-semibold text-white hover:bg-teal-900 hover:text-white hover:underline dark:bg-pink-800 dark:text-slate-100 dark:hover:bg-pink-900 md:px-6 md:py-2.5 md:text-lg"
  >{name}
  {#if newTab}
    <Icon icon="mdi:open-in-new"></Icon>
  {/if}
</a>
