export interface Experience {
  title: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  paragraphs: string[];
  bulletList: string[];
}

export const exp: Experience[] = [
  {
    title: "Mercedes-Benz Finans Sverige AB & Danmark AS",
    role: "Teknisk Produktägare",
    startDate: "Aug. 2024",
    endDate: "Dec. 2024",
    location: "Malmö, Sverige",
    paragraphs: [
      "Mercedes hade behovet av en djupt teknisk kunnig produktägare för att driva utveckling och förvaltning av kreditsystemet CPMS för Danmark och Sverige. Jag bidrog med att:",
    ],
    bulletList: [
      "Förbättra verksamhetens processer.",
      "Operativt underhålla flera av systemen, däribland Mercedes Point of Sales-system.",
      "Ta fram modeller för verksamhetsprocesserna och förbättrade arkitekturdokumentationen i LeanIX.",
      "Delta i migration av system från on-prem till Azure.",
      "Driva kostnadsfrågor och optimering av resurser i Azure.",
    ],
  },
  {
    title: "Örnsköldsviks Hamn och Logistik AB",
    role: "UX/UI-Designer",
    startDate: "Dec. 2023",
    endDate: "Juni 2024",
    location: "Örnsköldsvik (distans), Sverige",
    paragraphs: [
      "Örnsköldsviks Hamn och Logistik hade behovet av en UX/UI-designer för att framställa skisser till en ny externwebb, samt ett mindre intranät. Jag bidrog med att:",
    ],
    bulletList: [
      "Analysera existerande krav- och behovsunderlag.",
      "Leda workshops för att identifiera behov och skapade flera designförslag i Figma som passade inom budget.",
      "Utveckla ett användarvänligt gränssnitt i Figma som balanserade olika krav på tillgänglighet och design.",
      "Tillsammans med utvecklare, ta fram en optimal lösning som var genomförbar med CRM-systemet Sitevision.",
    ],
  },
  {
    title: "Örnsköldsviks Kommun",
    role: "UX/UI-Designer",
    startDate: "Dec. 2023",
    endDate: "Juni 2024",
    location: "Örnsköldsvik (distans), Sverige",
    paragraphs: [
      "Örnsköldsviks Kommun hade behovet av en UX/UI-designer för att framställa skisser till ett nytt intranät åt kommunen. Jag bidrog med att:",
    ],
    bulletList: [
      "Analysera existerande krav- och behovsunderlag.",
      "Leda workshops för att identifiera behov och skapade flera designförslag i Figma efter beställarnas önskemål.",
      "Utveckla ett användarvänligt gränssnitt i Figma som balanserade olika krav på tillgänglighet och design.",
      "Tillsammans med utvecklare, ta fram en optimal lösning som var genomförbar med CRM-systemet Sitevision.",
    ],
  },
  {
    title: "Jordbruksverket",
    role: "UX/UI-Designer",
    startDate: "Mars 2023",
    endDate: "Nov. 2023",
    location: "Jönköping, Sverige",
    paragraphs: [
      "Jordbruksverket hade behov av att ersätta två UX/UI-designers och en testare på kort varsel. Jag bidrog med att:",
    ],
    bulletList: [
      "Göra en grundlig tillgänglighetsutvärdering av mobilapplikationen Geofoto.",
      "Genomföra genomgående tillgänglighetstestning i Android och iOS för Geofoto.",
      "Agera kravställare för Geofoto kring tillgänglighet i enlighet med DOS-lagen, EN 301 549 och WCAG.",
      "Funktionstesta applikationen Geofoto.",
      "Medverka och leda workshops kring UX/UI-arbete, däribland förbättring av processer, samt verktyg.",
      "Ta fram skisser och prototyper för systemet Saga.",
      "Hjälpa utvecklare med frontendutveckling i JavaScript/Angular.",
      "Medverka i workshops kring framtagningen av ett nytt läkemedelssystem.",
      "Ta fram förändringar i skisser och prototyper för systemet DSData.",
      "Ta fram en prototyp tillsammans med användare för det nya systemet Gemet.",
      "Medverka i tvärfunktionella team för att diskutera och optimera processer över flera system och användargrupper.",
      "Medverka i flertalet agila team och projekt.",
    ],
  },
  {
    title: "Teledyne FLIR",
    role: "Lösningsarkitekt",
    startDate: "Dec. 2022",
    endDate: "Mars 2023",
    location: "USA (distans), Sverige",
    paragraphs: [
      "Teledyne FLIR hade behov av en lösningsarkitekt för att analysera den nuvarande on-prem-lösningen och vilka åtgärder som behövde vidtas för en eventuell migration till Azure Cloud. Jag bidrog med att:",
    ],
    bulletList: [
      "Intervjua anställda för att få en så helhetsbild av den nuvarande arkitekturen.",
      "Delta i presentationer av såkallade 'off the shelf'-lösningar från bland annat Oracle.",
      "Utvärdera av existerande produkter för eventuell migration av den nuvarande ariktekturen.",
      "Ta fram ett underlag med två kostnadseffektiva alternativ.",
    ],
  },
  {
    title: "Kammarkollegiet",
    role: "UX/UI-Designer & Kravanalytiker",
    startDate: "Dec. 2022",
    endDate: "Juni 2023",
    location: "Karlstad (distans), Sverige",
    paragraphs: [
      "Kammarkollegiet hade behov av en UX/UI-designer för att ta fram skisser och prototyper till ett nytt system för att hantera omställningsstöd åt arbetsgivare. Jag bidrog med att:",
    ],
    bulletList: [
      "Analysera existerande krav- och behovsunderlag.",
      "Intervjua anställda för att tillsammans skapa deras nya processer.",
      "Ta fram skisser och prototyper i Figma baserat på Material Design.",
      "Rekonstruera backloggen i Azure DevOps baserat på User Stories och Scenarion som jag skapade.",
      "Medverka i uppsättningen av CD/CI-Pipeline i Azure DevOps, GitHub och Azure Cloud.",
      "Testa prototyperna med användare.",
      "Vägleda och hjälpa utvecklare i deras arbete vid utveckling av applikationen genom TypeScript, React, Material Design.",
      "Ta fram flödesdiagram och processkartor för att skapa förståelse kring processerna.",
    ],
  },
  {
    title: "Hoodin AB",
    role: "Frontendutvecklare & UX/UI-Designer",
    startDate: "Feb. 2021",
    endDate: "Dec. 2022",
    location: "Malmö, Sverige",
    paragraphs: [
      "Hoodin hade behov av en frontendutvecklare med intresse for AWS. Jag bidrog med att:",
    ],
    bulletList: [
      "Utföra ett stort refaktoreringarbete från Javascript/Vue 2 till TypeScript/Vue 3 för Hoodins applikation.",
      "Ta fram ny funktionalitet, kravställan, skisser och prototyper av applikationen.",
      "Agera huvudansvarig frontendutvecklare och skapande av ny funktionalitet baserat på krav och skisser.",
      "Projektleda och hantera backlog, sprintplanering och retro",
      "Ansvara för vår AWS-lösning och kostnadsoptimering.",
      "Utveckla backendlösningar i PHP/Laravel/Python.",
      "Driva workshops av varierande art.",
      "Säkerställa samsyn kring visioner och roadmap.",
      "Designa och utveckla lösningar åt statliga regioner och kommuner för vandring- och cykelledessidor, såsom Skaneleden.se, Hallandsleden.se m.fl.",
    ],
  },
  {
    title: "Inwido AB",
    role: "Fullstackutvecklare",
    startDate: "Nov. 2016",
    endDate: "Feb. 2021",
    location: "Jönköping, Sverige",
    paragraphs: [
      "Inwido hade behov av en fullstackutvecklare för att bedriva förvaltning och utveckling av flera system. Jag bidrog med att:",
    ],
    bulletList: [
      "Bygga en 3D-generare i Three.js/C# för att med produktionsdata skapa fönster, fönsterdörrar och fasader i en 3D-vy. I motorn kunde man placera spröjs och annan utrustning för att på ett intuitivt och felfritt sätt skapa produkter för tillverkning.",
      "Ta fram skisser och prototyper för ny funktionalitet.",
      "Utveckla och förvalta systemet Konfiguratorn.",
      "Utvärdera och bidra i arbetet att migrera det affärskritiska systemet Konfiguratorn från Webforms/.Net till React/.Net Core.",
      "Bygga nya integrationer mot en ny mobilapplikation.",
      "Ta fram en ny POCO-lösning med Linq2DB för att förbättra utvecklingsarbetet, samt minska på potentiella fel.",
      "Framställa krav baserat på intervjuer med beställare.",
      "Bedriva användar- och A/B-testning med användare och beställare.",
      "Delta i workshops med beställare och utvecklingsteam.",
    ],
  },
  {
    title: "NYCE Solutions AB",
    role: "Fullstackutvecklare",
    startDate: "Sept. 2015",
    endDate: "Sept. 2016",
    location: "Jönköping, Sverige",
    paragraphs: [
      "NYCE hade behov av en fullstackutvecklare med intresse for e-handel. Jag bidrog med att:",
    ],
    bulletList: [
      "Ansvara för utveckling av e-handelsplattformar och integrationer med WMS-systemet NYCE Logic i .Net/C# och Webforms.",
      "Ta fram skisser och prototyper för ny funktionalitet.",
      "Genomföra kravanalys, utveckling av nya funktioner, samt säkerställde att plattformarna mötte beställarnas behov.",
      "Delta i workshops och optimering av lagerprocesser för att effektivisera verksamheten.",
      "Bedriva användar- och A/B-testning med användare och beställare.",
      "Ansvara för kommunikation med beställare.",
    ],
  },
];
