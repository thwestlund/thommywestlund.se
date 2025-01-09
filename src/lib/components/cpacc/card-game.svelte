<script lang="ts">
  import Card from "$lib/components/cpacc/card.svelte";
  import type IQuestion from "$lib/components/cpacc/iQuestion";
  import { questions } from "./questions";
  import { onMount } from "svelte";
  import Btn from "../btn.svelte";

  let front = $state(true);
  let randQuestion = $state({} as IQuestion);

  onMount(() => {
    randQuestion = randomizeQuestion(questions);
  });

  function nextQuestion() {
    setTimeout(() => {
      randQuestion = randomizeQuestion(questions);
    }),
      2000;

    front = true;
    document.getElementById("question")?.focus();
  }

  function randomizeQuestion(questions: IQuestion[]) {
    if (
      document.getElementById("wcag-cb") &&
      (document.getElementById("wcag-cb") as HTMLInputElement).checked
    ) {
      questions = questions.filter((q) => q.category === "WCAG");
    }
    return questions[Math.floor(Math.random() * questions.length)];
  }
</script>

<div class="flex flex-1 flex-col gap-8">
  <div class="flex flex-row items-center gap-2">
    <input
      type="checkbox"
      id="wcag-cb"
      onclick={() => (randQuestion = randomizeQuestion(questions))}
      class="h-4 w-4"
    />
    <label for="wcag-cb">Show WCAG questions only</label>
  </div>

  <Card {front} question={randQuestion} />

  <div class="flex flex-row gap-4">
    <Btn cta={true} onclick={() => (front = !front)}>Flip card</Btn>
    <Btn cta={true} onclick={nextQuestion}>Next</Btn>
  </div>
</div>
