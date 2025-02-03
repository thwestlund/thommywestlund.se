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

  const content: ProjectType = {
    ProjectHeader: createProjectHeader({
      projectName: "Projekt SERA",
      projectDecription:
        "Kammarkollegiet fick i uppdrag av regeringen att administrera omställningstöd till företags anställda som i någon mån drabbas av förändringar i processer där deras kompetens ersatts. Mitt uppdrag var att skapa designa systemet och skapa de nya processerna för och, vad som kommer visa sig, tillsammans med handläggarna. <a href='https://www.kammarkollegiet.se/vara-tjanster/ersattning-for-grundlaggande-omstallnings--och-kompetensstod/statlig-ersattning-till-arbetsgivare'><u>Läs mer om omställningsstöd hos Kammarkollegiet</u></a>.",
      projectImage: {
        src: wireframing,
        alt: "Illustration av en kvinna som håller i en mobiltelefon som är större än henne. På mobiltelefonen visas en markör för en plats på en karta.",
      },
      challenge:
        'Hur designar man ett system när beslutsfattare rycker på axlarna och säger: "Jag vet inte".',
      roles: ["UX/UI-designer", "Kravanalytiker", "Projektledare"],
      deliverables: [
        "Prototyp",
        "Processkartor",
        "Flödesdiagram",
        "Kunskap kring projektet",
      ],
      technologies: ["Figma", "React", "Material UI", "Draw.io"],
      timeline: "7 månader (December 2022 - Juni 2023)",
      prototypeLink:
        "https://www.figma.com/design/4JXrdW1XbU6LJaMob25vEA/Kammarkollegiet?node-id=1155-36511&t=zPq2DRYt8z5ty1cM-1",
    }),

    ProjectContent: createProjectContent({
      projectCatchPhrase:
        "Autentisering eller inte autentisering? Det är frågan",
      problemStatementHeader: "Nonchalant projektledning",
      problemStatementDescription:
        '"Vi behöver en enkel lista", sa projektledaren... Det är nog få UX/UI-designers som inte har hört uttryck i linje med det. Alla kan designa system. Åtminstone enligt dem själva. "Titta på databas-schemat". "Titta på ticketen i DevOps". Som för övrigt inte sa någonting. Detta blev signument för detta projekt som tog en rad spännande vändningar.',
      solutionHeader: "Mitt bidrag",
      solutionDescription:
        "Jag togs in som UX/UI-designer för att skapa en interaktiv prototyp av systemet baserat på utförd förstudie, samt backlog i DevOps. När jag ett halvår senare avslutat min tid i projektet har jag drivit projektet tillsammans med min kollega och nya projektledare, Hector. Jag har tagit ansvar för att upplysa samtliga om systematiska och användarbaserade krav. Jag har gjort om backloggen från grunden och hjälpt till där behov har funnits, men sist och inte minst... <br><br>Jag inkluderade användarna.",
      challengeHeader: "Ett tillsynes enkelt system",
      challengeDescription:
        'När jag påbörjade min resa i projektet hade det redan pågått i några månader. Ett skal av designen var framtagen i Figma, förstudien var lusläst på ett par dagar och jag var redo att sätta igång. Det som skulle visa sig bli signument för detta projekt var orden "Jag vet inte" och att det skulle fortsätta så. Jag fick därför ta saken i egna händer.',
      sections: [
        createSection({
          columns: 1,
          content: [
            createTextSection({
              title: "Hur allt började",
              description:
                "År 2022 fattade regeringen ett beslut om ett nytt så kallat omställningsstöd där Kammarkollegiet utsågs som ansvarig för detta uppdrag. Dels ett stöd för arbetstagare i form av ekonomisk ersättning för rådgivning och vägledning. Dels ett stöd till arbetsgivare som finansierar omställnings- och kompetensstöd till sina anställda. Detta resulterade i två olika projekt där jag och mitt team inkluderades i det sistnämnda. <br><br> Efter beslutet fattas 2022 initierades en förstudie som fullföljdes av leverantör Alpha som jag väljer att kalla dem. Därefter vann leverantör Beta ansvaret för leveransen av systemet. Beta bedrev i sin tur ingen utveckling och här kommer mitt team, Gamma in i bilden. <br><br> Före sommaren 2023 påbörjade Beta arbetet med att definiera leveransen av systemet utifrån förstudien. En backlog började byggas upp i Excel tillsammans med produktägaren hos Kammarkollegiet och övergripande processkartor skapades. Det är först oktober samma år som Gamma blev delaktig i projektet och jag hakade på i december.",
            }),
            createTextSection({
              title: "Inledande problem",
              description:
                "Som alltid i nya projekt brukar jag samla in så mycket information jag bara kan och effektivt läsa igenom det som finns att tillgå. Jag tycker om att ha en helhetsbild kring vad jag sysslar med. Dessutom upptäcker jag titt som tätt att de flest trivs med att nörda ner i detaljer där jag mer hör hemma på högre abstraktionsnivå. <br><br>Förstudiematerial lästes igenom. Excel-backlogen, processkartor och annat material togs tillvara på. Det jag upptäckte snabbt var en avsaknad av helhetsbild av det system vi utvecklade. Jag kunde ingenstans se en backlog med den funktionalitet som skulle implementeras under året för att säkerställa att stöd för hundratals miljoner skulle fullföljas i november 2023. <br><br>I rollen som UX-designer utgår jag alltid ifrån användaren. Du bygger ett system med användarens behov i fokus. Tyvärr ser jag allt för ofta det motsatta - Att vi bygger system som användaren ska anpassas till. Vi utgår alltså inte ifrån existerande processer eller skapa nya tillsammans med dem som ska utföra arbetet. Nedan ser du en bild på några av de användarberättelser som skapats sedan tidigare. Överallt kunde du se \"Som system ska jag...\". Detta ringer för mig varningsklockor då det skapar en rad olika problem: <br><br><ul class='list-disc list-inside'><li>Du utgår inte längre från användarens behov. Vet vi då om funktionen verkligen behövs? Var finns förankringen i det problem som det ska lösa för användaren?</li><li>Du riskerar att bygga något som inte är prioriterat eller ens behövs</li><li>Du riskerar att utvecklarna inte vet varför det ska byggas då det alltid är tydligare att utgå från ett användarbehov</li><li>En användarberättelser ska som begreppet säger, handla om användaren. Allt annat är som regel uppgifter, eller tasks förknippade till berättelsen.</li></ul>",
            }),
            createImageSection({
              src: backlog,
              alt: 'Skärmdump av en backlog skapad i excel. Bilden visar ett exempel på några användarberättelser som utgår från "som system ska jag..."',
            }),
            createTextSection({
              title: "Svarta hål i användarprocesserna",
              description:
                'När jag successivt designade om stötte jag på frågetecken. Hur ser processen ut i detta skede? Behövs det autentisering, alltså inloggningsmöjligheter? När kommer under året kommer vissa delar i processen gå av stapeln? Frågorna växte och svaret var allt som oftast "Jag vet inte" och "Det är inte viktigt i detta skedet". För mig var detta oroväckande då det är avsevärd skillnad på att bygga en lösning utan autentisering kontra fullskalig SSO-integration med Kammarkollegiets Active Directory, såkallat AD. Jag efterfrågade att få samtala med användarna, men det var tydligt att man aktivt undvek att inkludera användarna. Men det fortsatte vara av lägre prioritet och ju större grepp jag fick av helhetsbilden, desto mer insåg jag att en autentiseringslösning borde vara direkt avgörande.',
            }),
            createTextSection({
              title: "Jag sökte upp användarna",
              description:
                'Efter otaliga icke-svar på de frågor jag bordlade tog jag tag i saken på egen hand genom att kontakta användarna. Vi hade ett inledande möte där vi pratade om våra roller i detta projekt och vad vi vet. Punkter som autentisering och andra viktiga användarprocesser lyftes och vi kunde konstatera att där fanns ett överseende kring flera av punkterna. Systemet innefattade huvudsakligen två olika användartyper: Handläggare och Beslutsfattare. Handläggarens uppgift innebar att analysera de stödförfrågningar som inte blev automatiskt godkända. När de beslutat att en organisation får stöd träder beslutsfattaren in för att godkänna. Hur hanterar du såkallat "Segregation of Duty" (SoD), utan autentisering? <br><br>...Troligen inte alls. Detta lyftes med projektledare såväl produktägare och ändå landade man i att vi skulle bortse från autentisering. Det viktigaste nu var att användarna var med på tåget och förde en röst innifrån Kammarkollegiet. Detta i sin tur ledde till byte a projektledare och på sikt produktägare.',
            }),
            createSection({
              columns: 2,
              content: [
                createTextSection({
                  title: "Ombyggnad av backlog",
                  description:
                    "När jag nu förde en dialog direkt med användarna kunde jag fokusera på att åtgärda vår backlog som hade många hål. Jag skapade Epics som speglade huvudprocesserna och bröt ner dem i User Stories och sedan Tasks för utveckling och design. Samtliga User Stories hade tydliga Acceptanskriterier som jag att testa och godkänna.",
                }),
                createTextSection({
                  title: "Den tekniska lösning",
                  description:
                    "I och med att jag hade dedikerat mycket energi kring att förstå leveransen var det tydligt att lite aning om vad vi skulle leverera. Man hade dålig koll på delprocesserna som skulle tolkas och programmeras. Jag såg det därför som mitt ansvar att ta fram nya processkartor över interaktionen mellan användare och system. Jag framställde även flödesdiagram med samtliga delprocesser och statushantering som representerar verkliga händelser. Detta blev avgörande för att utvecklarna kunde jobba självständigt.",
                }),
              ],
            }),
            createTextSection({
              title: "Prototypen",
              description:
                "Fyra månader in i projektet var min tid över och jag fanns tillgänglig till mina kollegor och projektkamrater. Efter det återstod ett antal månader av utveckling fram till november/december då utbetalningen skulle ske. Tack vara nära kontakt med användarna under slutskedet för att testa av processerna, tydliga prototyper med interaktioner och data som liknar verkligheten, processkartor och flödesdiagram, samt en omstrukturerad backlog, kunde utvecklarna utföra sitt arbete och jag inkluderades ett fåtal gånger därefter. Systemet levererade stöd för uppåt sexhundra miljoner kronor och fortsätter vara i bruk än idag.",
            }),
            createImageSection({
              src: sera,
              alt: "Bilden visar prototypen på systemet SERA. Det är är strukturerat som en tabell med flikar som lyder Administrationsbolag, Omställningsorganisationer och Arbetsgivare. Till höger finns en knapp som lyder Lägg till, vilket är där användaren kan lägga till nya organisationer manuellt.",
            }),
          ],
        }),
      ],
    }),
  };
</script>

<Project {...content} />
