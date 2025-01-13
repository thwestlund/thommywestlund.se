<script lang="ts">

let { catchPhrase = "All things consider", situationHeader = "The problem", situationDescription = "What the problem is about is stated here in a block of text", solutionHeader = "I did this", solutionDescription = "To solve the issue we had to do this and that in a small block.", problemDescription = "This is where I describe the overal problems regarding the things we are facing in the project.", contributionDescription="This is what I did to reach where we are.", contributionPhrase = "Things do be like this sometimes?" } = $props();

</script>

<div class="min-h-lvh flex flex-col w-10/12 md:w-2/3 lg:w-1/2 gap-10">
  <div class="items-center flex flex-col gap-2">
    <h2>{catchPhrase}</h2>
    <span>Projektets bakgrund</span>
  </div>
  <div class="flex flex-row">
    <div class="flex-1 gap-2 flex flex-col">
      <h3>{situationHeader}</h3>
      <p>{@html situationDescription}</p>
    </div>
    <div class="flex-1 gap-2 flex flex-col">
      <h3>{solutionHeader}</h3>
      <p>{@html solutionDescription}</p>
    </div>
  </div>
  <hr>
  <div class="gap-2 flex flex-col">
    <h3>Problemformulering</h3>
    <p>{@html problemDescription}</p>
  </div>
  <hr>
  <div class="flex flex-col gap-12">
    <div class="gap-2 flex flex-col items-center">
      <h2>Mitt bidrag</h2>
      <span>{contributionPhrase}</span>
    </div>
    <div>{@html contributionDescription}</div>
  </div>
</div>