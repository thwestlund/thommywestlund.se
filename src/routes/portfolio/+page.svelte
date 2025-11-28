<svelte:head>
    <title>Portfolio - Thommy Westlund</title>
</svelte:head>

<script lang="ts">
  import learning from "$lib/assets/images/undraw_learning-sketchingsh.svg";
  import pedestrian from "$lib/assets/images/undraw_pedestrian-crossing_exov.svg";
  import support from "$lib/assets/images/undraw_team-spirit_18vw.svg";
  import communication from "$lib/assets/images/undraw_conference-call_ccsp.svg";
  import website from "$lib/assets/images/undraw_website_27ju.svg";
  import PortfolioCard from "$lib/components/portfolio/portfolio-card.svelte";
</script>

<div class="flex min-h-svh w-10/12 flex-col gap-32 pt-16 md:w-2/3 lg:w-1/2">
  <header><h1>Portfolio</h1></header>
  <div>
    <div class="flex flex-wrap justify-center gap-4">
      <PortfolioCard
        logo={pedestrian}
        title="Appen Geofoto"
        company="Jordbruksverket"
        path="/portfolio/jordbruksverket"
      />
      <PortfolioCard
        title="Omställningsstöd"
        company="Kammarkollegiet"
        logo={support}
        path="/portfolio/kammarkollegiet"
      />
      <PortfolioCard
        title="Intranätet"
        company="Örnsköldsviks Kommun"
        logo={communication}
        path="/portfolio/ornskoldsviks-kommun"
      />
      <PortfolioCard
        title="Externwebben"
        company="Örnsköldsviks Hamn & Logistik"
        logo={website}
        path="/portfolio/ornskoldsviks-hamn-och-logistik"
      />
      <PortfolioCard
        title="Läroplattformen"
        company="Forge IT Solutions AB"
        logo={learning}
        path="/portfolio/laroplattformen"
      />
    </div>
  </div>
</div>
