<script lang="ts">
  import Project from "$lib/components/portfolio/project.svelte";
  import { createProjectHeader } from "$lib/components/portfolio/project-header";
  import {
    createImageSection,
    createTextImageSection,
    createTextSection,
    createProjectContent,
    createSection,
  } from "$lib/components/portfolio/project-content";
  import headerImg from "$lib/assets/images/undraw_my-location_plm0.svg";

  import { type Project as ProjectType } from "$lib/components/portfolio/projects";

  const content: ProjectType = {
    ProjectHeader: createProjectHeader({
      projectName: "Geofoto ",
      projectDecription:
        "Mobilapplikationen tillägnad jordbrukare för uppföljning kring ansökan av jordbrukarstöd, samt övriga projektstöd. <u><a href='https://jordbruksverket.se/stod/jordbruk-tradgard-och-rennaring/sam-ansokan-och-allmant-om-jordbrukarstoden/uppfoljning-av-jordbruksmark'>Läs mer hos Jordbruksverket</a></u>.",
      projectImage: {
        src: headerImg,
        alt: "Screenshot of the learning platform interface",
      },
      challenge:
        "Hur säkerställer vi att applikationen når upp till tillgänglighetskraven i enlighet med DOS-lagen och EN 301 549?",
      roles: [
        "UX/UI-designer",
        "Tillgänglighetsexpert",
        "Testare",
        "Kravställare",
      ],
      deliverables: [
        "Tillgänglighetsanalys",
        "Tillgänglighetsredogörelse",
        "Ökad förståelse hos kollegor",
      ],
      technologies: ["VoiceOver", "TalkBack", "WCAG", "EN 301 549"],
      timeline: "9 månader (Mars 2022 - November 2022)",
      prototypeLink: "",
    }),

    ProjectContent: createProjectContent({
      projectCatchPhrase:
        "En komplicerad applikation tillägnad ett okomplicerat folk",
      problemStatementHeader: "Utmaning",
      problemStatementDescription:
        "En mobilapplikation som utvecklas av en internationell leverantör som dessutom delas mellan olika länder och lösningar. En föråldrad teknikstack som inte sätter fokus på tillgänglighet. En beställare som står på leverantörens sida. <br><br> Hur säkerställer man att en leverentör levererar enligt förväntade krav, och hur säkerställer du att beställaren förstår allvaret?",
      solutionHeader: "Lösningen",
      solutionDescription:
        "Utförande av en tillgänglighetsanalys som kravställare mot leverantören, samt en tillgänglighetsredogörelse för att säkerställa att kraven uppfylls på sikt.",
      challengeHeader: "Den oväntade pakten",
      challengeDescription:
        'När det är tydligt att en produkt inte lever upp till de krav som ställs, kommer jag att uttrycka detta. När en produktägare väljer att "benåda" en leverantör som tydligt inte kan leverera enligt undertecknade krav, kommer jag att sätta ner foten och säkerställa att det minsta vi kan göra är att åtgärda det vi kan, reflektera och sedan göra om och göra rätt. Även om detta innebär ett par klämda tår på vägen.',
      sections: [
        createSection({
          columns: 1,
          content: [
            createTextSection({
              title: "Hur Geofoto kom till",
              description:
                "Med EUs nya policy kring jordbruk och säkerställandet att våra marker används på rätt sätt, har de europeiska länderna sedan 2023 följt upp alla ansökningar om jordbrukarstöd genom satellitövervakning. När en jordbrukare ansöker om stöd via en e-tjänst som kallas <i>SAM Internet</i> kommer skiften som ansökan gäller att fotograferas från satellit. Denna bild kommer att användas för att verifiera att ansökan är korrekt och att marken används på rätt sätt. Om jordbruksverkets interna system flaggar att bilderna inte överensstämmer med vad ansökan säger, kommer en handläggare att granska ansökan och eventuellt besöka jordbrukaren för att säkerställa att allt är korrekt. <br><br> Om komplettering krävs kommer brev skickas ut till jordbrukaren med instruktioner om vad som behöver kompletteras och hur detta ska göras. Det är här Geofoto kommer in i bilden.",
            }),

            createTextSection({
              title: "Före min tid",
              description:
                'Jordbruksverket hade fram till 2023 aldrig bedrivit utveckling av mobilapplikationer. Man hade däremot tidigare utfört avrop kring utvecklingen av appar, så som Fjärilar, Lärkvitter, Nyttodjur, m.fl. Före avropet av Geofoto utfördes en förstudie för att säkerställa att man hade koll på målgruppen. Vad är det för ålder på våra jordbrukare? Vilket kön har de? Vilken teknik använder de? Hur ofta använder de sin dator eller telefon? m.m. Efter förstudien var utförd och kravspecifikationen var klar, skickades den till upphandling. <br><br> Upphandlingen vanns av det italienska företaget Abacco, som hade tidigare erfarenhet av att utveckla liknande applikationer för andra länder. EU rekommenderade Abacco som leverantör och på grund av företagets historia med att utveckla "samma" applikation för andra länder, kunde Abacco erbjuda ett mycket förmånligt pris gentemot konkurrenterna och därmed vinna upphandlingen. <br><br> Det är här, redan från början, som de första problemen uppstår. <br><br> Geofoto delar kodbas med andra länders applikationer. Detta kan inledningsvis tyckas som en fördel. Funktionalitet som redan är utvecklad behöver inte utvecklas på nytt och därför blir gratis för Jordbruksverket. Funktioner som efterfrågas av flera länder kan utvecklas gemensamt och därmed blir det billigare för alla länder. <br><br> Problemen är dock flerfaldiga. Applikationen byggdes på ett till synes förlegat ramverk, Framework7. Samtidigt har man historiskt inte tagit hänsyn till tillgänglighetskrav enligt EN 301 549, vilket resulterade i princip hela applikationen skulle behöva skrivas om för att uppfylla kraven. Detta var något beställarna inte hade insikter om vid upphandlingstillfället.',
            }),
            createTextSection({
              title: "Min resa med Geofoto",
              description:
                "Jag anslöt till teamet som stod som tillgänglighetsexpert och kravställare för Geofoto-applikation. Jag fick en introduktion i applikationen och alla kringliggande processer som hörde till jordbrukarstöd. Vid första anblick av applikationen var det tydligt att där fanns mängder med brister som med tiden skulle visa sig svåra att lösa.",
            }),
            createTextImageSection({
              text: createTextSection({
                title: "Prototyping",
                description:
                  "Developed wireframes and interactive prototypes to validate design concepts.",
              }),
              textLeft: true,
              image: createImageSection({
                src: "https://placehold.co/100x100",
                alt: "Prototype of the learning platform",
              }),
            }),
          ],
        }),
        createSection({
          columns: 1,
          content: [
            createImageSection({
              src: "https://placehold.co/100x100",
              alt: "Screenshot of the codebase in action",
            }),
          ],
        }),
      ],
    }),
  };
</script>

<Project {...content} />
