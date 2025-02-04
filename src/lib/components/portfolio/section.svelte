<script lang="ts">
  import TextImageSection from "./text-image-section.svelte";
  import TextSection from "./text-section.svelte";
  import QuotationSection from "./quotation-section.svelte";
  import ImageSection from "./image-section.svelte";
  import { SectionType } from "./project-content";
  import Section from "./section.svelte";
  import { type Section as SectionT } from "./project-content";

  const { ...content }: SectionT = $props();

  const gridColsMap: { [key: number]: string } = {
    1: "lg:grid-cols-1",
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
  };
</script>

<div class="grid gap-8 lg:gap-16 {gridColsMap[content.columns]}">
  {#each content.content as item}
    {#if item.type === SectionType.Text}
      <TextSection
        sectionTitle={item.title}
        sectionContent={item.description}
      />
    {:else if item.type === SectionType.TextImage}
      <TextImageSection
        sectionTitle={item.text.title}
        sectionContent={item.text.description}
        textLeft={item.textLeft}
        imageSrc={item.image.src}
        imageAlt={item.image.alt}
      />
    {:else if item.type === SectionType.Quotation}
      <QuotationSection
        sectionTitle={item.title}
        sectionContent={item.description}
      />
      <hr />
    {:else if item.type === SectionType.Image}
      <ImageSection src={item.image.src} alt={item.image.alt} />
    {:else if item.type === SectionType.Section}
      <Section {...content} />
    {/if}
  {/each}
</div>
