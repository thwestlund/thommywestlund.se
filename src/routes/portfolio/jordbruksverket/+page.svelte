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
  import geofotoImg from "$lib/assets/images/geofoto.webp";
  import diggImg from "$lib/assets/images/digg_tillsynsmanual.webp";
  import jvImg from "$lib/assets/images/redogorelse_jordbruksverket.webp";

  import { type Project as ProjectType } from "$lib/components/portfolio/projects";

  const content: ProjectType = {
    ProjectHeader: createProjectHeader({
      projectName: "Geofoto",
      projectDecription:
        "Mobilapplikation för jordbrukare avsedd för uppföljning av jordbrukarstöd och projektstöd. <u><a href='https://jordbruksverket.se/stod/jordbruk-tradgard-och-rennaring/sam-ansokan-och-allmant-om-jordbrukarstoden/uppfoljning-av-jordbruksmark'>Mer information finns hos Jordbruksverket</a></u>.",
      projectImage: {
        src: headerImg,
        alt: "Illustration av en kvinna som håller i en mobiltelefon som är större än henne. På mobiltelefonen visas en markör för en plats på en karta.",
      },
      challenge:
        "Hur säkerställer vi att applikationen uppfyller tillgänglighetskraven enligt DOS-lagen och EN 301 549?",
      roles: [
        "UX/UI-designer",
        "Tillgänglighets-expert",
        "Testare",
        "Kravställare",
      ],
      deliverables: [
        "Tillgänglighetsanalys",
        "Tillgänglighetsredogörelse",
        "Kompetensutveckling inom organisationen",
      ],
      technologies: ["VoiceOver", "TalkBack", "WCAG", "EN 301 549"],
      timeline: "9 månader (Mars 2023 - November 2023)",
      prototypeLink: "",
    }),
    ProjectContent: createProjectContent({
      projectCatchPhrase:
        "En komplex applikation för en mångsidig användargrupp",
      problemStatementHeader: "Utmanande förutsättningar",
      problemStatementDescription:
        "Projektet innefattade en mobilapplikation utvecklad av en internationell leverantör, delad mellan olika länder och lösningar. Applikationen byggde på en äldre teknikstack som inte fullt ut stödde grundläggande tillgänglighetskriterier. Utmaningen låg i att säkerställa att leverantören uppfyllde de förväntade kraven och levererade enligt överenskommelse.",
      solutionHeader: "Projektbidrag",
      solutionDescription:
        "Arbetet på Jordbruksverket resulterade i en omfattande tillgänglighetsanalys baserad på WCAG och EN 301 549, <a href='https://jordbruksverket.se/om-webbplatsen/tillganglighet-for-jordbruksverket.se/tillganglighet-for-appar/geofoto'><u>en publicerad tillgänglighetsredogörelse på Jordbruksverkets hemsida</u></a>, samt kunskapsspridning inom organisationen gällande identifierade brister och hur dessa kan återskapas med hjälp av VoiceOver/TalkBack eller simulering via Android Studio/XCode.",
      challengeHeader: "Hantering av intressekonflikter",
      challengeDescription:
        "När en produkt inte uppfyller lagstadgade krav och regleringar, är det nödvändigt att tydligt kommunicera detta. I situationer där produktägare och leverantör har motstridiga intressen, är det viktigt att prioritera åtgärder för att uppfylla kraven, reflektera över processbrister, och implementera förbättringar för framtida projekt.",
      sections: [
        createSection({
          columns: 1,
          content: [
            createTextSection({
              title: "Bakgrund till Geofoto",
              description:
                "I linje med EUs nya jordbrukspolitik för att säkerställa korrekt markanvändning, har skiften i europeiska länder sedan 2023 övervakats via satellit med automatiska analyser. När jordbrukare ansöker om stöd via e-tjänsten SAM Internet, fotograferas berörda skiften av Sentinel-satelliten (2023). Dessa bilder används för att verifiera ansökans korrekthet och markanvändning. Vid avvikelser granskas ansökan av handläggare, vilket kan leda till platsbesök. Om komplettering krävs, kontaktas jordbrukaren med instruktioner. Geofoto utvecklades för att underlätta denna process.",
            }),
            createTextSection({
              title: "Projektets utgångspunkt",
              description:
                "Före 2023 hade Jordbruksverket ingen erfarenhet av intern utveckling av mobilapplikationer, men hade tidigare upphandlat utveckling av appar som Fjärilar, Lärkvitter och Nyttodjur. Inför upphandlingen av Geofoto genomfördes en förstudie för att kartlägga målgruppen, inklusive demografi och teknikanvändning. Upphandlingen vanns av det italienska företaget Abacco, som rekommenderades av EU baserat på tidigare erfarenheter med liknande applikationer för andra länder. Abaccos konkurrenskraftiga pris, grundat i möjligheten att återanvända kod från andra projekt, var en avgörande faktor. Detta ledde dock till utmaningar, då den delade kodbasen byggde på ett äldre ramverk, Framework7, som inte fullt ut stödde moderna tillgänglighetskrav enligt EN 301 549.",
            }),
            createTextSection({
              title: "Projektets omfattning",
              description:
                "Vid projektstart omfattade uppdraget att efterträda tidigare UX/UI-designers samt ansvara för testning av Geofoto-appen. Tillgänglighetsbedömningen av Geofoto identifierades som en kritisk uppgift, med fokus på att säkerställa applikationens överensstämmelse med gällande lagar och riktlinjer.",
            }),
            createTextImageSection({
              text: createTextSection({
                title: "Tillgänglighetsanalys",
                description:
                  "En omfattande tillgänglighetsanalys av Geofoto-appen genomfördes baserad på DIGG:s tillsynsmanual för granskning. Analysen utvärderade appens överensstämmelse med WCAG-riktlinjerna och omfattade navigationsflöden, kontrastförhållanden, skärmläsarvänlighet och tangentbordsanvändning. Genom att följa tillsynsmanualen säkerställdes att granskningen utfördes enligt aktuella regelverk och branschpraxis.",
              }),
              textLeft: true,
              image: createImageSection({
                src: diggImg,
                alt: "Skärmdump av DIGGs, myndigheten för digital förvaltnings, tillsynsmanual",
              }),
            }),
            createTextImageSection({
              text: createTextSection({
                title: "Tillgänglighetstestning",
                description:
                  "Omfattande tester genomfördes med VoiceOver (iOS) och TalkBack (Android) för att säkerställa Geofoto-appens tillgänglighet för användare med syn- och motoriska nedsättningar. Testningen identifierade flera områden som krävde förbättring, inklusive fokusproblem, kontrastbrister, textskalningsmöjligheter och åtkomst via skärmläsare. Dessa tester var avgörande för att skapa en detaljerad lista över nödvändiga åtgärder för att förbättra appens tillgänglighet.",
              }),
              textLeft: false,
              image: createImageSection({
                src: geofotoImg,
                alt: "Skärmdump av Geofoto-appen via en Android-telefon. Bilden visar startfönstret i appen med en markering av en knapp som visar att verktyget TalkBack är påslaget.",
              }),
            }),
            createTextImageSection({
              text: createTextSection({
                title: "Tillgänglighetsredogörelse för Geofoto",
                description:
                  "I enlighet med DOS-lagen utarbetades en tillgänglighetsredogörelse baserad på den genomförda analysen. Redogörelsen sammanfattade de åtgärder som vidtagits för att säkerställa applikationens överensstämmelse med WCAG och EN 301 549. Dokumentet tjänar som en transparent rapport för både interna och externa intressenter, och belyser planerade förbättringar.",
              }),
              textLeft: true,
              image: createImageSection({
                src: jvImg,
                alt: "Skärmdump av tillgänglighetsredogörelsen på Jordbruksverkets hemsida. Bilden visar en del av redogörelsen som beskriver hur Geofoto-appen har granskats och vilka brister som har identifierats.",
              }),
            }),
            createTextSection({
              title: "Kompetensöverföring",
              description:
                "En viktig del av projektet var att överföra kunskap och färdigheter till kollegor på Jordbruksverket. Detta inkluderade utbildning i användning av VoiceOver och TalkBack för tillgänglighetstestning, samt hur man använder Android Studio för kodanalys och simulering av olika användarscenarier. Särskilt fokus lades på att förklara hur WCAG-riktlinjerna tolkas och tillämpas i praktiken, inklusive aspekter som kontrast, tangentbordsanvändbarhet och skärmläsarvänlighet. Målet var att säkerställa att teamet kunde genomföra egna tillgänglighetsbedömningar och förstå vikten av digital tillgänglighet i framtida projekt.",
            }),
          ],
        }),
      ],
    }),
  };
</script>

<Project {...content} />
