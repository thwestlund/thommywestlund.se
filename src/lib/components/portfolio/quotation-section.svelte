<script lang="ts">
  let {
    sectionTitle = "Section Title",
    sectionContent = "<p>Section content</p>",
  } = $props();
</script>

<div class="flex w-full flex-1 flex-col items-center gap-4">
  <h3>{sectionTitle}</h3>
  <div><p><i>{@html sectionContent}</i></p></div>
</div>
