<script lang="ts">
  import Skill from "$lib/components/skill.svelte";
  import skills from "$lib/assets/data/skills";
  import ExperienceDt from "$lib/components/experience-dt.svelte";
  import { exp } from "$lib/assets/data/experience";
  import LinkBtn from "$lib/components/link-btn.svelte";
  import Btn from "$lib/components/btn.svelte";
  import selfie from "$lib/assets/images/me.jpg";
  const linkedin = import.meta.env.VITE_PUBLIC_LINKEDIN;
  let experiences = [...exp];
  let showAllSkills: boolean = $state(false);
</script>

<div class="flex w-full flex-col items-center gap-8">
  <header class="flex flex-col items-center py-14 md:w-2/3 lg:w-1/2">
    <div class="flex flex-col items-center gap-8">
      <img
        src={selfie}
        alt="Thommy Westlund"
        class="size-fit h-80 w-80 rounded-full border-4 border-teal-600 transition duration-300 ease-in-out hover:border-teal-800 dark:border-pink-600/80 dark:hover:border-pink-800/80 md:h-96 md:w-96 md:border-8"
      />
      <h1 class="font-thin" id="home">Thommy Westlund</h1>
    </div>
  </header>
  <div class="flex w-full flex-col items-center gap-8">
    <section
      class="flex w-full scroll-py-96 flex-col items-center gap-8 bg-pink-50 py-14 shadow-lg dark:bg-slate-900 dark:shadow-slate-950"
      id="skills"
    >
      <div class="flex w-10/12 flex-col gap-4 md:w-2/3 lg:w-1/2">
        <h2>Färdigheter</h2>
        <dl class="flex flex-col gap-4">
          {#each showAllSkills ? skills : skills.filter((x) => x.visible) as skill}
            <Skill name={skill.name} level={skill.level} />
          {/each}
        </dl>
      </div>
      <Btn
        cta={true}
        styling="custom-class"
        onclick={() => {
          showAllSkills = !showAllSkills;
        }}
        >{showAllSkills
          ? "Visa färre färdigheter"
          : "Visa fler färdigheter"}</Btn
      >
    </section>

    <section
      class="flex w-10/12 flex-col gap-4 py-10 md:w-2/3 lg:w-1/2"
      id="experience"
    >
      <h2>Erfarenheter</h2>

      <dl class="flex flex-col gap-2">
        {#each experiences as experience, index}
          <ExperienceDt notFirst={index !== 0} obj={experience} />
        {/each}
      </dl>
    </section>

    <section
      id="contact"
      class="flex w-10/12 flex-1 flex-col gap-4 pb-14 pt-8 md:w-2/3 lg:w-1/2"
    >
      <h2>Kontakt</h2>
      <div class="flex w-10/12 flex-row gap-4 sm:w-full md:w-2/3 lg:w-1/2 flex-wrap">
        <LinkBtn
          name="Skicka mail"
          href={"mailto:" + import.meta.env.VITE_CONTACT_EMAIL}
        />
        <LinkBtn name="LinkedIn" href={linkedin} />
      </div>
    </section>
  </div>
</div>
