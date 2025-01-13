<script lang="ts">
  import Btn from "../btn.svelte";
  import LinkBtn from "../link-btn.svelte";
  import { onMount } from 'svelte';
  let { title = "Project Name", description = "This project is about this and that.", challenge = "The challenge in this project...", roles = ["Role 1", "Role 2"], deliverables = ["Deliverable 1", "Deliverable 2"], tools = ["Tool 1", "Tool 2"], timeline = "Feb 2023 - May 2023", prototypeLink = "https://www.figma.com/design/ZOBs7CSASmik6UEoD3GL7b/Untitled?node-id=0-1&t=2sf7nA0Ut4v5EV6b-1", image = { src: "website.svg", alt: "image of myself"} } = $props();
  let imageUrl = $state("");

  onMount(() => {
    imageUrl = `/assets/images/${image.src}`;
  });

  function viewPrototype() {

  }
</script>

<div class="flex flex-col gap-4 w-full py-16 dark:bg-gradient-to-br dark:from-pink-900 dark:via-blue-800 dark:to-green-900 items-center">
  <div class="flex flex-row w-10/12 md:w-2/3 lg:w-1/2  items-center">
  <div class="flex flex-col gap-12 flex-1">
    <div class="flex flex-col gap-3">
      <h1 class="text-4xl">{title}</h1>
      <p>{description}</p>
    </div>

    <div class="flex flex-row">
      <div class="flex-1 flex flex-col gap-3">
        <h2 class="text-2xl">Utmaningar</h2>
        <p>{challenge}</p>
      </div>
      <div class="flex-1 flex flex-col gap-3">
        <h2 class="text-2xl">Yrkesroll</h2>
        <ul class="list-disc list-inside gap-1.5 flex flex-col">
          {#each roles as role}
          <li>{role}</li>
          {/each}
        </ul>
      </div>
    </div>

    <div class="flex flex-row">
      <div class="flex-1 flex flex-col gap-3">
        <h2 class="text-2xl">Leverabler</h2>
        <ul class="list-disc list-inside gap-1.5 flex flex-col">
          {#each deliverables as deliverable}
          <li>{deliverable}</li>
          {/each}
        </ul>
      </div>
      <div class="flex-1 flex flex-col gap-3">
        <h2 class="text-2xl">Verktyg</h2>
        <ul class="list-disc list-inside gap-1.5 flex flex-col">
          {#each tools as tool}
          <li>{tool}</li>
          {/each}
        </ul>
      </div>
    </div>

    <div class="flex flex-row">
      <div class="flex-1 flex flex-col gap-3">
        <h2 class="text-2xl">Tidslinje</h2>
        <p>{timeline}</p>
      </div>
    </div>

    {#if prototypeLink}
    <div class="max-w-64">
      <LinkBtn href={prototypeLink} name="Prototyp"/>
    </div>
    {/if}
    </div>
    <img src="{imageUrl}" alt="{image.alt}" class="flex-1 max-h-80 ratio" />
  </div>
</div>