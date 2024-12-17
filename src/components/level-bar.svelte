<script lang="ts">
  let { level = 0, skill = "" } = $props();
</script>

<dd
  class="flex h-3 w-full rounded-full bg-pink-200 shadow-sm dark:bg-slate-700"
  aria-label={"Nivå " + level + " av 5 i " + skill}
>
  <div
    class="flex-1 rounded-bl-full rounded-tl-full dark:border-l-slate-900 {level >
    0
      ? 'bg-gray-700 dark:bg-pink-800'
      : ''}"
  ></div>
  <div
    class="flex-1 border-l-2 border-l-pink-50 dark:border-l-slate-900 {level > 1
      ? 'bg-gray-700 dark:bg-pink-800'
      : ''}"
  ></div>
  <div
    class="border-l-ping-50 flex-1 border-l-2 border-l-pink-50 dark:border-l-slate-900 {level >
    2
      ? 'bg-gray-700 dark:bg-pink-800'
      : ''}"
  ></div>
  <div
    class="border-l-ping-50 flex-1 border-l-2 border-l-pink-50 dark:border-l-slate-900 {level >
    3
      ? 'bg-gray-700 dark:bg-pink-800'
      : ''}"
  ></div>
  <div
    class="flex-1 rounded-br-full rounded-tr-full border-l-2 border-l-pink-50 dark:border-l-slate-900 {level >
    4
      ? 'bg-gray-700 dark:bg-pink-800'
      : ''}"
  ></div>
</dd>
