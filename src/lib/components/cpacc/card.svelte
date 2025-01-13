<script lang="ts">
  import type IQuestion from "$lib/components/cpacc/iQuestion";
  import Icon, { loadIcons } from "@iconify/svelte";
  import { onMount } from "svelte";

  let { question = {} as IQuestion, front = true } = $props();
  const iconLibrary = {
    "Assistive Technology": "mdi:devices",

    // Visual Disabilities Icons
    Visual: "mdi:eye",
    Blind: "mdi:eye-off",
    "Color Blindness": "mdi:eye-settings",
    "Low Vision": "mdi:eye-minus",

    // Hearing Disabilities Icons
    Hearing: "mdi:ear-hearing",
    Deaf: "mdi:ear-hearing-off",
    Audio: "mdi:volume-high",

    // Motor Disabilities Icons
    Motor: "mdi:hand",
    Mobility: "mdi:wheelchair-accessibility",
    Dexterity: "mdi:gesture-tap",

    // Cognitive Disabilities Icons
    Cognitive: "mdi:brain",
    Learning: "mdi:school",
    Memory: "mdi:memory",
    Attention: "mdi:alert-circle",

    // Assistive Technology Icons
    Assistive: "mdi:devices",
    "Screen Reader": "mdi:text-to-speech",
    Keyboard: "mdi:keyboard",
    Switch: "mdi:toggle-switch",

    // Standards & Compliance Icons
    Standards: "mdi:certificate",
    WCAG: "mdi:web",
    Guidelines: "mdi:book-open-variant",

    // Testing & Validation Icons
    Testing: "mdi:test-tube",
    Validation: "mdi:check-circle",
    Audit: "mdi:clipboard-check",

    // Legal & Policy Icons
    Legislation: "mdi:gavel",
    Policy: "mdi:file-document",
    Compliance: "mdi:shield-check",

    // Management & Business Icons
    Management: "mdi:account-cog",
    Business: "mdi:briefcase",
    Strategy: "mdi:strategy",

    // Procurement Icons
    Procurement: "mdi:cart",
    Vendor: "mdi:store",
    "Universal Design": "mdi:earth",
    "Digital Accessibility": "mdi:access-point",
    "Medical Model": "mdi:stethoscope",
    "Speech Disabilities": "mdi:microphone-off",
    "Functional Solutions Model": "mdi:cog",
    "Social Identity or Cultural Affiliation Model": "mdi:account-group",
    "User Experience": "mdi:emoticon-happy",
    "Design Principles": "mdi:palette",
    "Social Model": "mdi:account-network",
    "Charity Model": "mdi:charity",
    "Biopsychosocial Model": "mdi:brain",
    "Economic Model": "mdi:currency-usd",
    "Auditory Disabilities": "mdi:ear-hearing",
    "Visual Disabilities": "mdi:eye",
    ADA: "mdi:certificate",
    "Business Case": "mdi:briefcase",
    "Cognitive Disabilities": "mdi:brain",
    "Motor Disabilities": "mdi:hand",
    "Hearing Disabilities": "mdi:ear-hearing",
    "International Standards": "mdi:globe-model",
    "Deaf-blindness": "mdi:eye-off-outline",
    "User Interface": "mdi:monitor",

    // Default icon for unmatched categories
    Default: "mdi:help-circle",
  } as { [key: string]: string };

  const getCategoryIcon = (category: string) => {
    return iconLibrary[category] || iconLibrary["default"];
  };

  function loadIconsAsync(icons: string[]): Promise<any> {
    return new Promise((fulfill, reject) => {
      loadIcons(icons, (loaded, missing, pending, unsubscribe) => {
        if (pending.length) {
          return;
        }
        if (missing.length) {
          reject({
            loaded,
            missing,
          });
        } else {
          fulfill({
            loaded,
          });
        }
      });
    });
  }

  onMount(() => {
    loadIconsAsync(Object.values(iconLibrary));
  });
</script>

<div class="card perspective-1000 w-96">
  <div
    class="card__content relative aspect-[2/3] h-full w-full transform rounded-2xl border-2 border-teal-900 bg-orange-50 shadow-lg transition-transform duration-700 hover:shadow-2xl dark:border-pink-900 dark:bg-slate-900 dark:text-white {!front
      ? 'card__rotate'
      : ''}"
  >
    <div
      class="card__front backface-hidden absolute inset-0 flex flex-1 flex-col gap-4"
    >
      <div
        class="flex min-h-10 max-w-64 items-center justify-start gap-2 rounded-br-xl rounded-tl-xl bg-teal-900 p-2 text-sm text-slate-100 dark:bg-pink-900"
      >
        <Icon
          icon={getCategoryIcon(question.category)}
          width="24"
          height="24"
        />
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
        class="flex min-h-10 max-w-64 items-center justify-start gap-2 rounded-br-xl rounded-tl-xl bg-teal-900 p-2 text-sm text-slate-100 dark:bg-pink-900"
      >
        <Icon
          icon={getCategoryIcon(question.category)}
          width="24"
          height="24"
        />
        <span>{question.category}</span>
      </div>
      <div class="p-4">
        <h3 class="mb-2 text-2xl font-bold">Answer</h3>
        <p class="text-lg">{question.answer}</p>
      </div>
      <div class="p-4">
        <h3 class="mb-2 text-2xl font-bold">Explanation</h3>
        <p class="text-lg">{question.elaborate}</p>
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
