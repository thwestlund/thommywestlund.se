import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  define: {
    "process.env.PUBLIC_LINKEDIN": JSON.stringify(
      "https://www.linkedin.com/in/thommy-westlund-02090650/",
    ),
  },
});
