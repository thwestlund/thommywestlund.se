<script lang="ts">
  import TextSection from "./text-section.svelte";

  let {
    sectionTitle = "Section Title",
    sectionContent = "<p>Section content</p>",
    imageSrc = "https://placehold.co/100x100",
    imageAlt = "placeholder",
    textLeft = true,
  } = $props();
</script>

<div class="flex w-full flex-1 flex-col gap-8 sm:flex-row">
  {#if textLeft}
    <TextSection {sectionTitle} {sectionContent} />
  {/if}
  <img src={imageSrc} alt={imageAlt} class="flex-1" />
  {#if !textLeft}
    <TextSection {sectionTitle} {sectionContent} />
  {/if}
</div>
