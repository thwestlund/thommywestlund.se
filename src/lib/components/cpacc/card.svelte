<script lang="ts">
  import type IQuestion from "$lib/components/cpacc/iQuestion";
  let { question = {} as IQuestion, front = true } = $props();
</script>

<div class="card perspective-1000 w-96">
  <div
    class="card__content relative aspect-[2/3] h-full w-full transform rounded-2xl border-2 border-teal-900 bg-orange-50 shadow-lg transition-transform duration-700 dark:border-pink-900 dark:bg-slate-900 dark:text-white {!front
      ? 'card__rotate'
      : ''}"
  >
    <div
      class="card__front backface-hidden absolute inset-0 flex flex-1 flex-col gap-4"
    >
      <div
        class="flex min-h-10 max-w-48 items-start justify-start rounded-br-xl rounded-tl-xl bg-teal-900 p-2 text-sm text-slate-100 dark:bg-pink-900"
      >
        <span>{question.category}</span>
      </div>
      <h2 class="mb-2 p-4 text-3xl font-bold leading-relaxed">
        {question.question}
      </h2>
    </div>

    <div
      class="card__back backface-hidden rotate-y-180 absolute inset-0 flex transform flex-col gap-4"
    >
      <div
        class="flex min-h-10 w-3/6 items-start justify-start rounded-br-xl rounded-tl-xl bg-teal-900 p-2 text-sm text-slate-100 dark:bg-pink-900"
      >
        <span>{question.category}</span>
      </div>
      <div class="p-4">
        <h3 class="mb-2 text-2xl font-bold">Answer</h3>
        <p class="text-lg">{question.answer}</p>
      </div>
      <div class="p-4">
        <h3 class="mb-2 text-2xl font-bold">Explanation</h3>
        <p class="text-lg">{question.explanation}</p>
      </div>
    </div>
  </div>
</div>

<style>
  /* Vanilla CSS for flip card */
  .card {
    perspective: 800px;
  }
  .card__content {
    transform-style: preserve-3d;
  }

  .card__rotate {
    transform: rotateY(0.5turn);

    .card__back {
      visibility: visible;
    }
  }

  .card__front,
  .card__back {
    backface-visibility: hidden;
    position: absolute;
    inset: 0;
  }
  .card__back {
    transform: rotateY(0.5turn);
    visibility: hidden;
  }
</style>
