<script lang="ts">
  import { outsideClick } from "$lib/utils/outsideClick";

  let { src = "", alt = "", fullWidth = true } = $props();
  let zoomIn = $state(false);
</script>

<button
  onclick={() => (zoomIn = !zoomIn)}
  use:outsideClick={() => (zoomIn = false)}
  aria-labelledby="image"
>
  <img
    {src}
    {alt}
    id="image"
    class="rounded-lg object-contain shadow-lg duration-500 {zoomIn
      ? 'scale-110 md:scale-125 lg:scale-150'
      : ''} {fullWidth
      ? 'h-auto w-full flex-1'
      : 'max-h-160 min-w-44 max-w-full lg:max-w-96'}"
  />
</button>
