<script>
  import "../components/level-bar.svelte";
  import LevelBar from "../components/level-bar.svelte";

  let { name = "", level = 0 } = $props();
</script>

<div class="flex flex-col gap-1">
  <dt>{name}</dt>
  <LevelBar {level} skill={name} />
</div>
