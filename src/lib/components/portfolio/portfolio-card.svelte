<script lang="ts">
  let {
    logo = "https://placehold.co/100x100",
    title = "Mitt projekt",
    company = "Forge IT Solutions AB",
    path = "/portfolio",
    cardColor = "dark:bg-slate-800 bg-teal-900 text-slate-100",
  } = $props();
</script>

<div
  class="flex h-full justify-center duration-500 hover:scale-105 hover:duration-500"
>
  <a href={path} class="m-1 flex-1">
    <div
      class="flex min-w-60 flex-col items-center gap-12 rounded-lg px-4 pb-10 pt-4 {cardColor}"
    >
      <div class="flex flex-col items-center gap-1">
        <h2 class="flex-1 text-2xl" id="title">{title}</h2>
        <span class="text-sm">{company}</span>
      </div>
      <img
        src={logo}
        alt="Placeholder"
        class="h-32 w-32 rounded-lg drop-shadow-[0px_0px_1px_rgba(255,255,150,0.9)]"
        aria-describedby="title"
      />
    </div></a
  >
</div>

<style>
  .ds {
    filter: drop-shadow(0 0 2px rgba(244, 255, 188, 0.8));
  }
</style>
