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
  import externwebb from "$lib/assets/images/externwebb.webp";
  import styleguide from "$lib/assets/images/styleguide.webp";
  import externwebbHeader from "$lib/assets/images/undraw_website_zbig.svg";

  const content: ProjectType = {
    ProjectHeader: createProjectHeader({
      projectName: "Örnsköldsviks Hamn & Logistik - Externwebb",
      projectDecription:
        "Ett omfattande projekt för att modernisera Örnsköldsviks Hamn & Logistiks digitala närvaro genom utveckling av en användarvänlig externwebb i SiteVision CMS. Projektet inkluderade framtagning av grafisk profil samt design av ett effektivt content management system för självständig innehållshantering.",
      projectImage: {
        src: externwebbHeader,
        alt: "Illustration på en kvinna som lutar sig mot en laptop som visar en webbplats.",
      },
      challenge:
        "Att skapa en modern och användarvänlig webbplats med fokus på självständig innehållshantering och integration av realtidsdata för fartygsrörelser.",
      roles: ["UX/UI-designer"],
      deliverables: [
        "Designsystem",
        "Komponentbibliotek",
        "Grafisk profil",
        "Prototyper",
        "Intranätslösning",
      ],
      technologies: ["Figma", "SiteVision CMS"],
      timeline: "December 2023 - Juni 2024",
      prototypeLink:
        "https://www.figma.com/proto/XOYtAvYtkFpJHvNyhoHPlE/%C3%96rnsk%C3%B6ldsviks-Hamn?page-id=0%3A1&node-id=1-2&p=f&viewport=167%2C42%2C0.07&t=p1hws771u0vfBeB4-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2&show-proto-sidebar=1",
    }),

    ProjectContent: createProjectContent({
      projectCatchPhrase:
        "Från leverantörsberoende till digital självständighet - en modern hamnportal med användaren i fokus",
      problemStatementHeader: "Utmaningen",
      problemStatementDescription:
        "Örnsköldsviks Hamn & Logistik stod inför utmaningen att modernisera sin digitala närvaro samtidigt som de ville frigöra sig från beroendet av externa leverantörer för innehållsuppdateringar. Den befintliga lösningen var kostsam att underhålla och saknade möjlighet till integration av realtidsdata för fartygsrörelser.",
      solutionHeader: "Lösningen",
      solutionDescription:
        "Genom att utveckla ett designsystem med återanvändbara komponenter i Figma skapades grunden för en flexibel och skalbar lösning. Detta kompletterades med en ny grafisk profil som balanserade professionalitet med modern design. Implementationen i SiteVision CMS gav organisationen full kontroll över sin digitala närvaro.",
      challengeHeader: "Från beroende till självständighet",
      challengeDescription:
        "En central utmaning var att designa en lösning som både var tekniskt avancerad med realtidsintegration av fartygsdata och samtidigt tillräckligt användarvänlig för att organisationen själva skulle kunna hantera allt innehåll utan extern hjälp.",
      sections: [
        createSection({
          columns: 1,
          content: [
            createTextSection({
              title: "Strategisk design",
              description:
                "Projektet inleddes med djupgående intervjuer med stakeholders för att förstå både interna och externa behov. Detta ledde till utvecklingen av ett robust designsystem som gjorde det möjligt att snabbt iterera på design samtidigt som vi säkerställde konsistens genom hela plattformen.",
            }),
            createTextImageSection({
              text: createTextSection({
                title: "Grafisk identitet",
                description:
                  "Med endast en primärfärg och en logotyp som utgångspunkt utvecklades en komplett grafisk profil. Särskild vikt lades vid val av sekundärfärger och call-to-action-element för att skapa en balanserad och professionell visuell identitet.",
              }),
              textLeft: true,
              image: createImageSection({
                src: styleguide,
                alt: "Bild på index-delen av designsystemet som togs fram åt Örnsköldsviks Hamn & logistik",
              }),
            }),
            createTextSection({
              title: "Komponentbaserad struktur",
              description:
                "Ett modulärt komponentbibliotek utvecklades med fokus på flexibilitet och återanvändbarhet. Centrala komponenter inkluderade en dynamisk text-och-bild-modul, kortkomponent för tjänstepresentation, samt en specialdesignad tabell för fartygsrörelser. Varje komponent utformades med hänsyn till tillgänglighet och användarvänlighet.",
            }),

            createImageSection({
              src: externwebb,
              alt: "Slutgiltig design av startsidan för Örnsköldsviks Hamn & Logistik",
            }),
            createTextSection({
              title: "Resultat och framtidssäkring",
              description:
                "Projektet resulterade i en modern, användarvänlig webbplats där organisationen nu självständigt kan hantera innehåll och uppdateringar. Det utvecklade designsystemet lade grunden för framtida digital expansion, vilket redan bevisats genom den snabba implementationen av intranätslösningen. Integrationerna för fartygsdata effektiviserade arbetsflöden och förbättrade informationstillgängligheten för alla intressenter.",
            }),
            createTextSection({
              title: "Intranätsbonus",
              description:
                "Tack vare det välutvecklade designsystemet kunde vi snabbt leverera en anpassad intranätslösning när behovet uppstod. Detta demonstrerade styrkan i vårt modulära tillvägagångssätt och möjliggjorde en kostnadseffektiv expansion av den digitala infrastrukturen. <a href='https://www.figma.com/design/XOYtAvYtkFpJHvNyhoHPlE/%C3%96rnsk%C3%B6ldsviks-Hamn?node-id=628-2390&t=7etcT8ANec5g24kK-1' class='underline'>Visa design av intranätet</a>.",
            }),
          ],
        }),
      ],
    }),
  };
</script>

<Project {...content} />
