<script lang="ts">
  let {
    sectionTitle = "Section Title",
    sectionContent = "<p>Section content</p>",
    styling = "",
  } = $props();
</script>

<div class="flex w-full flex-1 flex-col gap-4 {styling}">
  <h3>{sectionTitle}</h3>
  <div>{@html sectionContent}</div>
</div>
