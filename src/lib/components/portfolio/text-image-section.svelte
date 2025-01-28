<script lang="ts">
  import TextSection from "./text-section.svelte";
  import { onMount } from "svelte";

  let isSmallScreen = $state(false); // Variable to track screen size

  const checkScreenSize = () => {
    isSmallScreen = window.innerWidth < 1280;
  };

  // Update the variable when the component is mounted
  onMount(() => {
    checkScreenSize();

    const handleResize = () => checkScreenSize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  let {
    sectionTitle = "Section Title",
    sectionContent = "<p>Section content</p>",
    imageSrc = "https://placehold.co/100x100",
    imageAlt = "placeholder",
    textLeft = true,
  } = $props();
</script>

<div class="flex w-full flex-1 flex-col gap-6 xl:flex-row">
  {#if textLeft || isSmallScreen}
    <TextSection {sectionTitle} {sectionContent} styling=" xl:min-w-80" />
  {/if}
  <img
    src={imageSrc}
    alt={imageAlt}
    class="max-h-160 min-w-10 max-w-full rounded-lg object-contain shadow-lg lg:max-w-96"
  />
  {#if !textLeft && !isSmallScreen}
    <TextSection {sectionTitle} {sectionContent} />
  {/if}
</div>
