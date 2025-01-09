<script lang="ts">
  export let answer = {
    answer: "",
    explanation: "",
  };
</script>

<div class="card__backside flex flex-col gap-8">
  <div>
    <h3 class="mb-2 text-2xl font-bold">Answer</h3>
    <p class="text-lg">{answer.answer}</p>
  </div>
  <div>
    <h3 class="mb-2 text-2xl font-bold">Explanation</h3>
    <p class="text-lg">{answer.explanation}</p>
  </div>
</div>
