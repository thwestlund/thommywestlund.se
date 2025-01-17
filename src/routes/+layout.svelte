<script>
  import "../app.css";
  import MenuItem from "$lib/components/menu-item.svelte";
  import { replaceState } from "$app/navigation";
  import { onMount } from "svelte";
  import Btn from "$lib/components/btn.svelte";
  let { children } = $props();
  let scrollDirection = $state("up"); // Tracks scroll direction ('up' or 'down')
  let lastScrollY = 0; // Tracks the last scroll position
  let isMenuOpen = $state(false);
  let isDarkMode = $state(false);
  const linkedin = import.meta.env.VITE_PUBLIC_LINKEDIN;
  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    const sections = document.querySelectorAll("section, h1");
    const options = {
      root: document.querySelectorAll("nav"), // Use the viewport as the root
      rootMargin: "10%", // Adjust the bottom margin to trigger earlier
      threshold: 1.0, // Trigger when 10% of the element is visible
    };
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      isDarkMode = savedTheme === "dark";
    } else {
      isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    updateTheme();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      scrollDirection = "down";
    } else {
      scrollDirection = "up";
    }

    lastScrollY = currentScrollY;
  };

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };

  function toggleTheme() {
    isDarkMode = !isDarkMode;
    updateTheme();
  }

  function updateTheme() {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }
</script>

<div class="flex min-h-screen flex-col items-center gap-8" id="parent">
  <nav
    class="topbar xl: sticky top-0 flex w-full flex-row items-center justify-end gap-4 bg-zinc-50/90 py-2 backdrop-blur-sm dark:bg-slate-950/90 sm:justify-end lg:justify-center {scrollDirection ===
    'down'
      ? 'shadow-md'
      : 'shadow-none'}"
  >
    <div class="hidden flex-row gap-4 lg:visible lg:flex">
      <MenuItem name={"Hem"} href={"/"} />
      <MenuItem name={"Färdigheter"} href={"/#skills"} />
      <MenuItem name={"Erfarenheter"} href={"/#experience"} />
      <MenuItem name={"Kontakt"} href={"/#contact"} />
      <MenuItem name={"Projekt"} href={"/projects"} />
    </div>

    <!-- Mobile Menu -->
    <div
      class="absolute top-16 w-full origin-top bg-zinc-50/95 p-4 text-gray-700 shadow-lg backdrop-blur-sm transition-transform dark:bg-slate-950/90 dark:text-slate-100 lg:hidden"
      class:scale-y-100={isMenuOpen}
      class:scale-y-0={!isMenuOpen}
    >
      <ul class="flex flex-col">
        <li class="contents">
          <a href="/#home" class="p-4" onclick={() => (isMenuOpen = false)}>
            Hem
          </a>
        </li>
        <li class="contents">
          <a href="/#skills" class="p-4" onclick={() => (isMenuOpen = false)}>
            Färdigheter
          </a>
        </li>
        <li class="contents">
          <a
            href="/#experience"
            class="p-4"
            onclick={() => (isMenuOpen = false)}
          >
            Erfarenheter
          </a>
        </li>
        <li class="contents">
          <a href="/#contact" class="p-4" onclick={() => (isMenuOpen = false)}>
            Kontakt
          </a>
        </li>
        <li class="contents">
          <a href="/projects" class="p-4" onclick={() => (isMenuOpen = false)}>
            Projekt
          </a>
        </li>
      </ul>
    </div>

    <Btn styling="flex flex-row gap-2" onclick={toggleTheme}>
      <div>{isDarkMode ? "☀️" : "🌙"}</div>
      <div>{isDarkMode ? "Ljust läge" : "Mörkt läge"}</div>
    </Btn>

    <!-- Burger Icon -->
    <button
      class="block focus:outline-none lg:hidden"
      onclick={toggleMenu}
      aria-label="Toggle menu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="m-2 h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        {#if isMenuOpen}
          <!-- Close Icon -->
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        {:else}
          <!-- Burger Icon -->
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        {/if}
      </svg>
    </button>
  </nav>

  {@render children()}

  <footer
    class="flex w-full justify-center bg-teal-900 pt-5 text-slate-100 dark:bg-pink-900"
  >
    <div
      class="flex w-10/12 flex-col justify-between gap-20 pt-2 md:w-2/3 lg:w-1/2"
    >
      <div class="flex w-10/12 flex-row gap-4 md:w-2/3 lg:w-1/2">
        <div class="flex w-10/12 flex-col gap-2 md:w-2/3 lg:w-1/2">
          <h3>Kontakt</h3>
          <a href={linkedin} class="text-sm hover:underline">LinkedIn</a>
          <a
            href={"mailto:" + import.meta.env.VITE_CONTACT_EMAIL}
            class="text-sm hover:underline">Maila mig</a
          >
        </div>
        <div class="flex w-10/12 flex-col gap-2 md:w-2/3 lg:w-1/2">
          <h3>Diverse</h3>
          <a href="/projects" class="text-sm hover:underline">Projekt</a>
          <a
            href="https://github.com/thwestlund"
            class="text-sm hover:underline">Github</a
          >
        </div>
      </div>

      <p
        class="text-center align-bottom text-sm leading-6 text-white dark:text-slate-100"
      >
        © 2024, Forge IT Solutions AB, Org.nr. 559502-1923
      </p>
    </div>
  </footer>
</div>

<style>
  /* Optional: Smooth transition for box-shadow */
  .topbar {
    transition: box-shadow 0.5s ease-in-out;
  }
</style>
