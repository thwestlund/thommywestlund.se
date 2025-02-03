<script lang="ts">
  import TextImageSection from "./text-image-section.svelte";
  import TextSection from "./text-section.svelte";
  import { type ProjectContent as ProjectContentType } from "./project-content";
  import { SectionType } from "./project-content";
  import QuotationSection from "./quotation-section.svelte";
  import ImageSection from "./image-section.svelte";
  import Section from "./section.svelte";

  const { ...content }: ProjectContentType = $props();
</script>

<div class="flex min-h-lvh w-full flex-col gap-20 p-6 pt-14 md:w-2/3 lg:w-1/2">
  <div class="flex flex-col items-center gap-2">
    <h2>{content.projectCatchPhrase}</h2>
    <span>Projektets bakgrund</span>
  </div>
  <div class="flex flex-col lg:flex-row gap-8">
    <TextSection
      sectionTitle={content.problemStatementHeader}
      sectionContent={content.problemStatementDescription}
    />
    <TextSection
      sectionTitle={content.solutionHeader}
      sectionContent={content.solutionDescription}
    />
  </div>
  <hr />
  <QuotationSection
    sectionTitle={content.challengeHeader}
    sectionContent={content.challengeDescription}
  />
  <hr />
  {#each content.sections as section}
    <div
      class="flex flex-wrap gap-8 md:gap-16"
      class:flex-col={section.columns === 1}
      class:flex-row={section.columns === 2}
    >
      {#each section.content as item}
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
          <Section content={item.content} columns={item.columns} type={item.type}/>
        {/if}
      {/each}
    </div>
  {/each}
</div>
