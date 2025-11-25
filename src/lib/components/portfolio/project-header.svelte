<script lang="ts">
  import LinkBtn from "../link-btn.svelte";
  import { onMount } from "svelte";
  import { type ProjectHeader } from "./project-header";

  const { ...content }: ProjectHeader = $props();
  let imageUrl = $state("");

  onMount(() => {
    imageUrl = content.projectImage.src;
  });
</script>

<div
  class="flex w-full flex-col items-center gap-4 bg-pink-50 py-4 shadow-lg dark:bg-sky-950/30"
>
  <div class="w-full px-6 text-sm md:w-2/3 lg:w-1/2">
    <a href="/portfolio"
      >← <span class="underline">Tillbaka till Portfolio</span></a
    >
  </div>
  <div
    class="flex w-full flex-col items-center p-6 md:w-2/3 lg:w-1/2 lg:flex-row"
  >
    <div class="flex flex-1 flex-col gap-12">
      <div class="flex flex-col gap-3">
        <h1 class="text-4xl">{@html content.projectName}</h1>
        <p>{@html content.projectDecription}</p>
      </div>
      <div class="flex flex-col gap-14 xl:flex-row">
        <div class="flex flex-col gap-8">
          <div class="flex sm:flex-row gap-12 flex-col">
            <div class="flex flex-1 flex-col gap-3">
              <h2 class="text-2xl">Utmaning</h2>
              <p>{@html content.challenge}</p>
            </div>
            <div class="flex flex-1 flex-col gap-3">
              <h2 class="text-2xl">Yrkesroll</h2>
              <ul class="flex list-inside list-disc flex-col gap-2">
                {#each content.roles as role}
                  <li>{role}</li>
                {/each}
              </ul>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-12">
            <div class="flex flex-1 flex-col gap-3">
              <h2 class="text-2xl">Leverabler</h2>
              <ul class="flex list-inside list-disc flex-col gap-2">
                {#each content.deliverables as deliverable}
                  <li>{deliverable}</li>
                {/each}
              </ul>
            </div>
            <div class="flex flex-1 flex-col gap-3">
              <h2 class="text-2xl">Verktyg</h2>
              <ul class="flex list-inside list-disc flex-col gap-2">
                {#each content.technologies as tech}
                  <li>{tech}</li>
                {/each}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row">
        <div class="flex flex-1 flex-col gap-3">
          <h2 class="text-2xl">Tidslinje</h2>
          <p>{content.timeline}</p>
        </div>
      </div>

      {#if content.prototypeLink}
        <div class="flex">
          <LinkBtn href={content.prototypeLink} name="Prototyp" />
        </div>
      {/if}
    </div>
  </div>
</div>
