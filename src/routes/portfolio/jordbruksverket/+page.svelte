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
      projectName: "Geofoto ",
      projectDecription:
        "Mobilapplikationen tillägnad jordbrukare för uppföljning kring ansökan av jordbrukarstöd, samt övriga projektstöd. <u><a href='https://jordbruksverket.se/stod/jordbruk-tradgard-och-rennaring/sam-ansokan-och-allmant-om-jordbrukarstoden/uppfoljning-av-jordbruksmark'>Läs mer hos Jordbruksverket</a></u>.",
      projectImage: {
        src: headerImg,
        alt: "Illustration av en kvinna som håller i en mobiltelefon som är större än henne. På mobiltelefonen visas en markör för en plats på en karta.",
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
        "En mobilapplikation som utvecklas av en internationell leverantör som dessutom delas mellan olika länder och lösningar. En föråldrad teknikstack som inte hanterar grundläggande tillgänglighetskriterier. En beställare som står på leverantörens sida. <br><br> Detta var situationen jag introducerades till och mina frågor blev då: Hur kan jag säkerställa att en leverentör levererar enligt förväntade krav? Hur får jag leverantören att leva upp till det som lovats?",
      solutionHeader: "Mitt bidrag",
      solutionDescription:
        "Min tid på Jordbruksverket resulterade i en utförd tillgänglighetsanalys baserat på WCAG och EN 301 549, <a href='https://jordbruksverket.se/om-webbplatsen/tillganglighet-for-jordbruksverket.se/tillganglighet-for-appar/geofoto'><u>en tillgänglighetsredogörelse på Jordbruksverkets hemsida</u></a>, samt sprida kunskap kring bristerna och hur de återskapas med VoiceOver/TalkBack eller simulering via Android Studio/XCode.",
      challengeHeader: "Den oväntade pakten",
      challengeDescription:
        "När en produkt inte lever upp till de krav som ställs av lagar och regleringar, kommer jag att uttrycka detta. När en produktägare väljer att stå vid leverantörens sida, kommer jag att sätta ner foten och säkerställa vi åtgärdar det vi kan, reflekterar över det som gick fel, för att sedan göra om och göra rätt. Även om detta innebär ett par klämda tår på vägen.",
      sections: [
        createSection({
          columns: 1,
          content: [
            createTextSection({
              title: "Hur Geofoto kom till",
              description:
                "Med EUs nya polik kring jordbruk för att säkerställa rätt använding av våra marker, har sedan 2023, skiften hos samtliga europeiska länder följts upp med satellitövervakning och automatiska analyser. När en jordbrukare ansöker om stöd via en e-tjänst som kallas <i>SAM Internet</i> kommer skiften som ansökan gäller att fotograferas från satelliten, Sentinel (2023). Dessa bilder används sedan för att verifiera att ansökan är korrekt och att marken används på rätt sätt. Om jordbruksverkets interna system flaggar att bilderna inte överensstämmer med ansökan, kommer handläggare att granska ansökan och eventuellt besöka jordbrukaren för att säkerställa att allt är korrekt. <br><br> Om komplettering krävs kommer brev skickas ut till jordbrukaren med instruktioner om vad som behöver kompletteras och hur detta ska göras. Det är här Geofoto kommer in i bilden.",
            }),

            createTextSection({
              title: "Före min tid",
              description:
                'Jordbruksverket hade fram till 2023 aldrig bedrivit utveckling av mobilapplikationer. Man hade däremot tidigare utfört avrop kring utvecklingen av appar, så som Fjärilar, Lärkvitter, Nyttodjur, m.fl. Före avropet av Geofoto utfördes en förstudie för att säkerställa att man hade koll på målgruppen. Vad är det för ålder på våra jordbrukare? Vilket kön har de? Vilken teknik använder de? Hur ofta använder de sin dator eller telefon? m.m. Efter förstudien var utförd och kravspecifikationen var klar, skickades den till upphandling. <br><br> Upphandlingen vanns av det italienska företaget Abacco, som hade tidigare erfarenhet av att utveckla liknande applikationer för andra länder. EU rekommenderade Abacco som leverantör och på grund av företagets historia med att utveckla "samma" applikation för andra länder, kunde Abacco erbjuda ett mycket förmånligt pris gentemot konkurrenterna och därmed vinna upphandlingen. <br><br> Det är här, redan från början, som de första problemen uppstår. <br><br> Geofoto delar kodbas med andra länders applikationer. Detta kan inledningsvis tyckas som en fördel. Funktionalitet som redan är utvecklad behöver inte utvecklas på nytt och därför blir gratis för Jordbruksverket. Funktioner som efterfrågas av flera länder kan utvecklas gemensamt och därmed blir det billigare för alla länder. <br><br> Problemen är dock flerfaldiga. Applikationen byggdes på ett till synes förlegat ramverk, Framework7. Samtidigt har man historiskt inte tagit hänsyn till tillgänglighetskrav enligt EN 301 549, vilket resulterade i princip hela applikationen skulle behöva skrivas om för att uppfylla kraven. Detta var något beställarna på Jordbrukverket inte hade insikter om vid upphandlingstillfället.',
            }),
            createTextSection({
              title: "Min resa med Geofoto",
              description:
                "När jag anlände på Jordbruksverket var planen att jag skulle efterträda en fast anställd UX/UI-designer och en konsulterande UX/UI-designer. På mitt bord lades till slut fyra olika projekt, samt att jag blev ansvarig testare för appen Geofoto då ytterligare en konsult fick lämna. Bland alla dessa uppgifter blev tillgänglighetsbedömningen av Geofoto den viktigaste. Absolut inte roligast, men allvaret i bristerna och ignoransen bland beslutsfattare formade detta till min hjärtefråga.",
            }),
            createTextImageSection({
              text: createTextSection({
                title: "Tillgänglighetsanalys",
                description:
                  "Under detta uppdrag genomförde jag en omfattande tillgänglighetsanalys av Geofoto-appen. Arbetet utgick från DIGG:s tillsynsmanual för granskning, där jag metodiskt utvärderade Geofotos överensstämmelse med WCAG-riktlinjerna (Web Content Accessibility Guidelines).<br><br>Analysen omfattade bland annat navigationsflöden, kontrastförhållanden, skärmläsarvänlighet och tangentbordsanvändning. Genom att följa tillsynsmanualen säkerställde jag att granskningen utfördes enligt aktuella regelverk och branschpraxis.",
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
                  'För att säkerställa att Geofoto-appen var fullt tillgänglig för användare med syn- och motoriska nedsättningar genomförde jag omfattande tester med VoiceOver (iOS) och TalkBack (Android). Genom dessa skärmläsarverktyg kunde jag simulera och uppleva appens navigering ur ett användarperspektiv.<br><br>Då leverantören förväntade sig en komplett lista med åtgärdspunkter (jag vet, sjukt och orimligt) blev en av de större utmaningarna och tidsbovarna att hitta samtliga problem. De var nämligen många. Fokusproblem, kontrastproblem, texter som inte ändrar storlek efter systeminställningar, "knappar" som inte var åtkomliga med VoiceOver/Talkback och mycket mer.<br><br>I den bifogade bilden kan du se hur en knapp markeras av TalkBack, vilket gör det möjligt för användaren att veta exakt var de befinner sig i appen. Dessa tester säkerställde att alla interaktiva element var tillgängliga och lättnavigerade, vilket gav en bättre användarupplevelse för personer som är beroende av skärmläsarteknologi.',
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
                  "I enlighet med DOS-lagen krävs att en tillgänglighetsredogörelse presenteras om en tjänst brister enligt lag. Därför var en viktig del i mitt arbete att utifrån tillgänglighetsanalysen framställa redogörelsen. Denna redogörelse sammanfattade de åtgärder som vidtagits för att säkerställa att applikationen uppfyller gällande tillgänglighetskrav enligt WCAG och EN 301 549. Redogörelsen fungerade både som ett dokument för interna och externa intressenter, och som en öppen rapport för användare som är beroende av tillgängliga digitala tjänster. <br><br> Som jag inledningsvis anmärkte fanns en form av pakt...eller snarare sympati för leverantören från produktägarens sida. Därför var det för mig viktigt att tillgänglighetsredogörelsen fastslogs innan min tid var slut på Jordbruksverket. Med transparens utåt påvisar vi att en väntat åtgärd är planerad.",
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
                "Avslutningsvis bedrev jag kompetensöverföring kring området för kollegor på Jordbruksverket. Jag visade hur man effektivt testar applikationens tillgänglighet med hjälp av verktygen VoiceOver och TalkBack. <br><br> Vidare utbildade jag teamet i hur man använder Android Studio för att testa och analysera koden. Genom att simulera olika användarscenarier och genomföra kodgranskningar gav jag en inblick i hur man kan upptäcka och åtgärda tillgänglighetsbrister på en djupare teknisk nivå. <br><br> En annan central del av kompetensöverföringen var att visa hur WCAG-riktlinjerna (Web Content Accessibility Guidelines) tolkas och tillämpas i praktiken. Jag förklarade de olika punkterna i WCAG, såsom kontrast, tangentbordsanvändbarhet och skärmläsarvänlighet, och visade konkret hur dessa riktlinjer översätts till specifika krav och tester. Genom att koppla WCAG:s teoretiska ramverk till praktiska tester och åtgärder säkerställdes att teamet kunde genomföra egna tillgänglighetsbedömningar och förstå vikten av att uppfylla de krav som ställs för digital tillgänglighet. <br><br> Det absolut viktigaste med kompetensöverföringen var säkerställandet att där fanns individer som drev frågan vidare. Efter ett antal strider med beslutsfattare kring allvaret kände jag stundtals hopplöshet kring frågan. Varför skyddade man leverantören när det så tydligt fanns krav ställde på dem? Jag har mina tankar kring varför som inte kommer att lyftas här. Jag lämnade med en känsla av att jag gjorde vad jag kunde.",
            }),
          ],
        }),
      ],
    }),
  };
</script>

<Project {...content} />
