<script lang="ts">
  import Content from "$lib/components/portfolio/project-content.svelte";
  import Header from "$lib/components/portfolio/project-header.svelte";
  import { type Project } from "$lib/components/portfolio/projects";
  import { onMount } from "svelte";

  let { ...content }: Project = $props();
</script>

<div class="flex w-full flex-col items-center gap-4">
  <Header {...content.ProjectHeader} />
  <Content {...content.ProjectContent} />
</div>
