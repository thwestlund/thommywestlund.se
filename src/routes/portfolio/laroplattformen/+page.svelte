<svelte:head>
    <title>Läroplattformen - Thommy Westlund</title>
</svelte:head>

<script lang="ts">
  import {
    createImageSection,
    createProjectContent,
    createSection,
    createTextSection,
  } from "$lib/components/portfolio/project-content";
  import { createProjectHeader } from "$lib/components/portfolio/project-header";
  import Project from "$lib/components/portfolio/project.svelte";
  import { type Project as ProjectType } from "$lib/components/portfolio/projects";
  import learning from "$lib/assets/images/undraw_teaching_58yg.svg";
  import persona from "$lib/assets/images/persona.webp";
  import personaInfo from "$lib/assets/images/persona-info.webp";
  import prioritering from "$lib/assets/images/prioritering.webp";

  const content: ProjectType = {
    ProjectHeader: createProjectHeader({
      projectName: "Läroplattformen",
      projectDecription:
        "En flexibel och modern läroplattform utvecklad för företag som vill effektivisera sin interna kompetensutveckling. Plattformen möjliggör för organisationer att skapa, administrera och leverera skräddarsydda utbildningar för onboarding, produktutbildning och intern kompetensutveckling.",
      projectImage: {
        src: learning,
        alt: "En illustration av en lärare som pekar på olika delar i ett system eller process.",
      },
      challenge:
        "Att utveckla en skalbar läroplattform från grunden med fokus på användarcentrerad design och modern teknisk arkitektur.",
      roles: ["Produktägare", "UX Designer", "Fullstack-utvecklare"],
      deliverables: [
        "User Personas",
        "User Stories",
        "Prioriteringsmatris",
        "Teknisk prototyp",
        "Systemarkitektur",
      ],
      technologies: ["Vue", "TypeScript", "Tailwind CSS", ".NET Core", "C#"],
      timeline: "Pågående projekt",
      prototypeLink: "",
    }),

    ProjectContent: createProjectContent({
      projectCatchPhrase:
        "Från vision till verklighet - utvecklingen av en modern läroplattform med användarcentrerad design",
      problemStatementHeader: "Utmaningen",
      problemStatementDescription:
        "Att utveckla en läroplattform kräver djup förståelse för olika användartypers behov och beteenden. Utmaningen ligger i att skapa en plattform som är tillräckligt flexibel för att möta olika organisationers behov, samtidigt som den förblir intuitiv och användarvänlig. Detta samtidigt som tekniska val och arkitektur ska vara framtidssäkrade och skalbara.",
      solutionHeader: "Tillvägagångssätt",
      solutionDescription:
        "Projektet drivs med ett användarcentrerat och agilt arbetssätt, där varje fas bygger på grundlig analys och välgrundade beslut. Från initial användaranalys och kravställning till tekniska vägval och implementation, ligger fokus på att skapa en plattform som möter verkliga användarbehov.",
      challengeHeader: "Från behov till funktionalitet",
      challengeDescription:
        "En central utmaning var att strukturera och prioritera funktionalitet utifrån olika användargruppers behov. Genom att arbeta metodiskt med personas och user stories kunde vi identifiera och prioritera kritiska funktioner för en första proof of concept.",
      sections: [
        createSection({
          columns: 1,
          content: [
            createTextSection({
              title: "Användaranalys och kravställning",
              description:
                "Projektet inleddes med en djupgående analys av tre huvudsakliga användargrupper: kursskapare, kursadministratörer och kursdeltagare. Genom att utveckla detaljerade personas kunde vi bättre förstå varje grupps specifika behov och utmaningar. Detta ledde till utvecklingen av 30-40 väldefinierade user stories som lade grunden för plattformens funktionalitet.",
            }),
            createSection({
              columns: 2,
              content: [
                createImageSection({
                  src: persona,
                  alt: "En bild på en av de tre personas som tagits fram. Detta är Eva Svensson som är utbildningsadministratör och bilden ger information om henne som person och hennes egenskaper.",
                }),
                createImageSection({
                  src: personaInfo,
                  alt: "En bild på Eva Svenssons olika behov utifrån intressen, påverkan, mål, behov och förväntningar, motivation och frustrationer.",
                }),
              ],
            }),

            createTextSection({
              title: "Prioritering och scope",
              description:
                "För att säkerställa ett genomförbart första skede av projektet utvecklades en prioriteringsmatris som vägde funktionernas betydelse mot genomförbarhet. Detta resulterade i en tydlig bild av vilka funktioner som skulle ingå i proof of concept, samt en långsiktig plan för vidareutveckling av plattformen.",
            }),
            createImageSection({
              src: prioritering,
              alt: "En prioriteringsmatris på alla de användarberättelser som tagits fram.",
            }),
            createSection({
              columns: 2,
              content: [
                createTextSection({
                  title: "Tekniska val",
                  description:
                    "Efter noggrann utvärdering av olika tekniska alternativ föll valet på en modern stack med Vue och TypeScript i frontend, tillsammans med Tailwind CSS för styling. Backend-implementationen påbörjades i .NET Core/C#, med potential för framtida migrering till Nuxt och Supabase för ökad utvecklingseffektivitet.",
                }),
                createTextSection({
                  title: "Systemarkitektur",
                  description:
                    "Med fokus på skalbarhet och underhållbarhet utvecklades en initial arkitektur som stödjer grundläggande funktionalitet som användarhantering och kursadministration. Implementationen av autentisering via e-post lade grunden för framtida utbyggnad med SSO och andra avancerade funktioner.",
                }),
              ],
            }),
            createTextSection({
              title: "Lärdomar och nästa steg",
              description:
                "Projektet har hittills gett värdefulla insikter i betydelsen av grundlig användaranalys och systematisk prioritering. En viktig lärdom var behovet av att bryta ner epics i mindre, hanterbara user stories och tasks för effektivare utveckling. Nästa fas fokuserar på att vidareutveckla proof of concept med prioriterade funktioner och utvärdera huruvida jag ska fortsätta med .Net/C# eller ta steget mot Nuxt och Supabase.",
            }),
          ],
        }),
      ],
    }),
  };
</script>

<Project {...content} />
