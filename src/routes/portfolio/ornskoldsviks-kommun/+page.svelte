<svelte:head>
    <title>Örnsköldsviks kommuns - Thommy Westlund</title>
</svelte:head>

<script lang="ts">
  import {
    createImageSection,
    createProjectContent,
    createSection,
    createTextImageSection,
    createTextSection,
  } from "$lib/components/portfolio/project-content";
  import { createProjectHeader } from "$lib/components/portfolio/project-header";
  import Project from "$lib/components/portfolio/project.svelte";
  import { type Project as ProjectType } from "$lib/components/portfolio/projects";
  import ornkom from "$lib/assets/images/undraw_web-devices_i15y.svg";
  import ornkomLarge from "$lib/assets/images/ornkom_large.webp";
  import ornkomKluster from "$lib/assets/images/ornkom_kluster.webp";

  const content: ProjectType = {
    ProjectHeader: createProjectHeader({
      projectName: "Örnsköldsviks kommun - Intranät",
      projectDecription:
        "Örnsköldsviks kommun initierade en modernisering av sitt intranät baserat på omfattande användarundersökningar och behov av förbättrad intern kommunikation. Projektet omfattade design av ett nytt användargränssnitt med fokus på tillgänglighet och användarupplevelse inom ramen för SiteVision CMS.",
      projectImage: {
        src: ornkom,
        alt: "Illustration av en kvinna som interagerar med olika typer av tekniska enheter.",
      },
      challenge:
        "Att balansera moderna designambitioner med tekniska och budgetmässiga begränsningar.",
      roles: ["UX/UI-designer"],
      deliverables: [
        "Prototyper",
        "Wireframes",
        "Designspecifikationer",
        "Komponentbibliotek",
      ],
      technologies: ["Figma", "SiteVision CMS", "Adobe XD"],
      timeline: "December 2023 - Juni 2024",
      prototypeLink: "https://www.figma.com/proto/cxEGbgCIRFqmUD8mpa4IKk/%C3%96rnsk%C3%B6ldsviks-Kommun?node-id=265-5821&t=L4xWcydeALSzdTBy-1"
    }),

    ProjectContent: createProjectContent({
      projectCatchPhrase:
        "När vision möter verklighet - konsten att skapa användarvänliga lösningar inom givna ramar",
      problemStatementHeader: "Projektets utmaningar",
      problemStatementDescription:
        "Projektet präglades av en initial diskrepans mellan visionära designambitioner och praktiska begränsningar. Tre olika intressenter med skilda fokusområden - tillgänglighet, grafisk profil och ekonomi - skulle förenas i en gemensam lösning, samtidigt som budgetramarna successivt visade sig vara mer begränsade än först antaget.",
      solutionHeader: "Projektbidrag",
      solutionDescription:
        "Som UX/UI-designer utvecklades tre olika designkoncept som gradvis anpassades efter projektets förutsättningar. Genom iterativ prototyping och nära samarbete med intressenter kunde vi navigera mellan olika behov och begränsningar för att nå en genomförbar lösning som ändå mötte grundläggande användarbehov.",
      challengeHeader: "Balansera ambition och genomförbarhet",
      challengeDescription:
        "En central utmaning var att hantera högt ställda förväntningar på ett modernt och nyskapande intranät samtidigt som de tekniska och ekonomiska ramarna blev alltmer begränsade. Detta krävde en flexibel designprocess och förmåga att prioritera mellan olika önskemål.",
      sections: [
        createSection({
          columns: 1,
          content: [
            createTextSection({
              title: "Projektbakgrund",
              description:
                "Örnsköldsviks kommun identifierade behov av att modernisera sitt intranät baserat på en omfattande intern undersökning. Tre huvudintressenter utsågs med olika fokusområden: tillgänglighet, grafisk profil och ekonomi. Min roll var att som UX/UI-designer utveckla designförslag baserat på förstudier och intressenternas input, med SiteVision som teknisk plattform.",
            }),
            createTextSection({
              title: "Initial analys",
              description:
                "Projektet inleddes med en grundlig genomgång av förstudiematerial, särskilt enkätundersökningen som kartlade användarnas frustration med det befintliga intranätet och deras önskemål för framtiden. Detta kombinerades med intressentdialoger för att förstå deras specifika visioner och krav. Analysen visade på ett komplext landskap av behov och förväntningar som behövde balanseras mot praktiska begränsningar.",
            }),
            createTextImageSection({
              text: createTextSection({
                title: "Design och koncept",
                description:
                  "Baserat på den initiala analysen utvecklades tre olika designkoncept: ett traditionellt SiteVision-upplägg, en hybridlösning med moderna inslag, och ett nytänkande koncept med bentobox-design och hög grad av personalisering. Dessa koncept presenterades för intressenterna och användes som utgångspunkt för vidare diskussioner om projektets inriktning.",
              }),
              textLeft: true,
              image: createImageSection({
                src: ornkomKluster,
                alt: "Bild på en av de tidiga skisserna över en såkallad klustersida i intranätet. En klustersida innehåller länkar till olika sidor på intranätet i en tydlig struktur.",
              }),
            }),

            createSection({
              columns: 2,
              content: [
                createTextSection({
                  title: "Intressenthantering",
                  description:
                    "Under projektets gång blev det tydligt att olika intressenter hade starka och ibland motstridiga visioner om slutresultatet. Särskilt utmanande var balansen mellan kreativ frihet och fördefinierade idéer. Detta ledde till utvecklingen av en mer collaborativ designprocess med gemensamma skissessioner mellan mig och den designstyrda beställaren.",
                }),
                createTextSection({
                  title: "Anpassning och pragmatism",
                  description:
                    "Allt eftersom budgetramarna förtydligades krävdes successiv nedskallning av ambitionsnivån. Detta ledde till en iterativ process där designkoncepten gradvis anpassades mot en mer standardiserad SiteVision-lösning, samtidigt som vi arbetade för att bevara kärnfunktionalitet och användarvänlighet.",
                }),
              ],
            }),
            createImageSection({
              src: ornkomLarge,
              alt: "En bild på en av prototyperna som togs fram av intranätet.",
            }),
            createTextSection({
              title: "Lärdomar och resultat",
              description:
                "Projektet resulterade i en genomförbar design som mötte grundläggande användarbehov inom givna ramar. Viktiga lärdomar inkluderade betydelsen av tidig budgetklarhet, värdet av snabb prototyping med intressenter, och vikten av att tidigt kartlägga och hantera olika intressenters förväntningar och visioner. Dessa insikter har lett till utveckling av mer strukturerade metoder för intressenthantering och förväntansstyrning i nya projekt.",
            }),
          ],
        }),
      ],
    }),
  };
</script>

<Project {...content} />
