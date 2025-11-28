<svelte:head>
    <title>Projekt SERA - Thommy Westlund</title>
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

  import wireframing from "$lib/assets/images/undraw_wireframing_d3cx.svg";
  import backlog from "$lib/assets/images/kammarkollegiet-backlog.webp";
  import sera from "$lib/assets/images/sera.webp";
  import sera2 from "$lib/assets/images/sera_2.webp";

  const content: ProjectType = {
    ProjectHeader: createProjectHeader({
      projectName: "Projekt SERA",
      projectDecription:
        "Kammarkollegiet fick i regeringsuppdrag att administrera omställningstöd för anställda som påverkas av organisatoriska förändringar där deras kompetens ersätts. Uppdraget omfattade design och implementering av ett nytt system samt utveckling av handläggningsprocesser i samarbete med berörda handläggare. <a href='https://www.kammarkollegiet.se/vara-tjanster/ersattning-for-grundlaggande-omstallnings--och-kompetensstod/statlig-ersattning-till-arbetsgivare'><u>Läs mer om omställningsstöd hos Kammarkollegiet</u></a>.",
      projectImage: {
        src: wireframing,
        alt: "Illustration av en kvinna som håller i en mobiltelefon som är större än henne. På mobiltelefonen visas en markör för en plats på en karta.",
      },
      challenge:
        "Att designa ett system med otydliga kravspecifikationer och avgränsningar.",
      roles: ["UX/UI-designer", "Kravanalytiker", "Projektledare"],
      deliverables: [
        "Prototyp",
        "Processkartor",
        "Flödesdiagram",
        "Projektdokumentation",
      ],
      technologies: ["Figma", "React", "Material UI", "Draw.io"],
      timeline: "7 månader (December 2022 - Juni 2023)",
      prototypeLink: "",
    }),

    ProjectContent: createProjectContent({
      projectCatchPhrase:
        "Systemutveckling i gränslandet mellan användarupplevelse och säkerhet",
      problemStatementHeader: "Projektets utmaningar",
      problemStatementDescription:
        "Projektet inleddes med en förenklad syn på systemets komplexitet och krav. Den initiala specifikationen saknade väsentliga aspekter kring användarprocesser och säkerhet, vilket krävde en omfattande analys och omvärdering av projektets omfattning.",
      solutionHeader: "Projektbidrag",
      solutionDescription:
        "Som UX/UI-designer utvecklades en interaktiv prototyp baserad på förstudien och DevOps backlog. Rollen expanderade till att omfatta projektledning tillsammans med kollegan Hector, där fokus låg på att integrera användarcentrerade och systematiska krav. Detta inkluderade en grundlig omstrukturering av backloggen och implementering av användardriven utveckling.",
      challengeHeader: "Komplexitet bakom enkelhet",
      challengeDescription:
        "Vid projektstart fanns ett grundläggande designskal i Figma och en genomförd förstudie. Det blev snart tydligt att projektets omfattning och komplexitet krävde en mer strukturerad approach och djupare analys av användarprocesser och systemkrav.",
      sections: [
        createSection({
          columns: 1,
          content: [
            createTextSection({
              title: "Projektbakgrund",
              description:
                "2022 initierade regeringen ett nytt omställningsstöd med Kammarkollegiet som ansvarig myndighet. Stödet omfattade två delar: ekonomisk ersättning för rådgivning och vägledning till arbetstagare, samt stöd till arbetsgivare för finansiering av omställnings- och kompetensstöd. Projektet fokuserade på den senare delen. Leverantör Alpha genomförde förstudien, varefter Beta fick huvudansvaret för systemleveransen. Gamma, vårt team, anlitades som utvecklingspartner. Projektet initierades av Beta under sommaren 2023, med vår medverkan från oktober samma år.",
            }),
            createTextSection({
              title: "Initial analys",
              description:
                "Vid projektstart genomfördes en omfattande genomgång av tillgänglig dokumentation, inklusive förstudie, Excel-backlog och processkartor. Analysen identifierade flera kritiska brister: avsaknad av helhetsbild över systemfunktionalitet, bristfällig kartläggning av implementationskrav för stödutbetalningar, samt otillräcklig förankring i användarprocesser. En särskilt noterbar brist var systemcentrerade användarberättelser som inte reflekterade faktiska användarbehov, vilket riskerade att leda till: 1) Utveckling av ej behovsanpassad funktionalitet, 2) Ineffektiv resursallokering, 3) Bristande förståelse för implementationsmål bland utvecklare, 4) Otydlig koppling mellan systemfunktioner och användarbehov.",
            }),
            createImageSection({
              src: backlog,
              alt: 'Skärmdump av en backlog skapad i excel. Bilden visar ett exempel på några användarberättelser som utgår från "som system ska jag..."',
            }),
            createTextSection({
              title: "Process- och säkerhetsanalys",
              description:
                "Under designfasen identifierades kritiska frågeställningar kring processflöden och autentisering. Särskilt viktig var frågan om implementering av inloggningsfunktionalitet och integration med Kammarkollegiets Active Directory. Avsaknaden av tydliga riktlinjer kring dessa aspekter riskerade att påverka projektets leveransmål och säkerhetskrav.",
            }),
            createTextSection({
              title: "Användarintegration",
              description:
                "För att adressera identifierade brister initierades direktkontakt med slutanvändarna. Genom användardialoger identifierades kritiska processkrav, särskilt gällande rollfördelning mellan handläggare och beslutsfattare. En central fråga var implementering av Segregation of Duty (SoD), vilket krävde en omvärdering av systemets autentiseringskrav. Detta ledde till organisatoriska förändringar i projektledningen.",
            }),
            createSection({
              columns: 2,
              content: [
                createTextSection({
                  title: "Backlog-strukturering",
                  description:
                    "Baserat på användardialoger genomfördes en omfattande omstrukturering av projektets backlog. Huvudprocesser organiserades i Epics, med tillhörande User Stories och utvecklingsuppgifter. Varje User Story försågs med tydliga acceptanskriterier för kvalitetssäkring.",
                }),
                createTextSection({
                  title: "Teknisk implementation",
                  description:
                    "För att säkerställa en effektiv utvecklingsprocess skapades detaljerade processkartor över användar-system-interaktioner samt flödesdiagram för delprocesser och statushantering. Detta gav utvecklingsteamet nödvändig klarhet i systemets funktionella krav. <a class='underline' href='https://forgeitsolutions-my.sharepoint.com/:u:/g/personal/thommy_forge-it_se/EXOSxxRIfPpOul8-VR0EVsoB_xsW-3Zpn4lFLiUzDTDhJg?e=wjnFHv'>Se flödesdiagram.</a>",
                }),
              ],
            }),
            createTextSection({
              title: "Resultat och leverans",
              description:
                "Efter fyra månaders intensivt arbete levererades en komplett systemdesign med tillhörande dokumentation. Systemet utvecklades vidare fram till driftsättning i november/december. Genom kontinuerlig användartestning, detaljerade prototyper och omfattande processdokumentation kunde utvecklingsteamet slutföra implementationen enligt plan. Systemet hanterar nu stödutbetalningar i storleksordningen 600 miljoner kronor och är fortsatt i aktiv drift.",
            }),
            createImageSection({
              src: sera,
              alt: "Bilden visar prototypen på systemet SERA. Det är är strukturerat som en tabell med flikar som lyder Administrationsbolag, Omställningsorganisationer och Arbetsgivare. Till höger finns en knapp som lyder Lägg till, vilket är där användaren kan lägga till nya organisationer manuellt.",
            }),
            createImageSection({
              src: sera2,
              alt: "Bilden visar prototypen på systemet SERA. Bilden visar en vy över hantering av ansökan.",
            }),
          ],
        }),
      ],
    }),
  };
</script>

<Project {...content} />
