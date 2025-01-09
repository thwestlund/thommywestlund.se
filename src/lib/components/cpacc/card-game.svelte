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
    return questions[Math.floor(Math.random() * questions.length)];
  }
</script>

<div class="flex flex-1 flex-col gap-8">
  <Card {front} question={randQuestion} />

  <div class="flex flex-row gap-4">
    <Btn cta={true} onclick={() => (front = !front)}>Flip card</Btn>
    <Btn cta={true} onclick={nextQuestion}>Next</Btn>
  </div>
</div>
