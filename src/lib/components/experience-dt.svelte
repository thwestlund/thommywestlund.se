<script lang="ts">
  import type Experience from "$lib/assets/models/experience";
  let { notFirst = false, obj = {} as Experience } = $props();
</script>

<dt
  class="text-lg font-bold text-teal-800 dark:text-slate-100 md:text-2xl {notFirst
    ? 'mt-8'
    : ''}"
>
  {obj.title} - {obj.role}
</dt>
<dd class="flex flex-col gap-2 md:flex-row md:gap-4">
  <div class="flex flex-row items-center gap-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 fill-current text-zinc-900 dark:text-zinc-50"
      viewBox="0 -960 960 960"
      fill="currentColor"
      ><path
        d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"
      /></svg
    >
    <span>{obj.startDate} - {obj.endDate}</span>
  </div>
  <div class="flex flex-row items-center gap-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 fill-current text-zinc-900 dark:text-zinc-50"
      viewBox="0 -960 960 960"
      fill="currentColor"
      ><path
        d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"
      /></svg
    >
    <span>{obj.location}</span>
  </div>
</dd>
<dd class="flex flex-col gap-1">
  {#each obj.paragraphs as paragraph}
    <p>{paragraph}</p>
  {/each}
  <ul class="flex flex-col gap-1 pl-4">
    {#each obj.bulletList as listItem}
      <li class="list-disc">{listItem}</li>
    {/each}
  </ul>
</dd>
