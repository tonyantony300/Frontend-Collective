import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Frontend Collective",
      social: {
        github: "https://github.com/tonyantony300/Frontend-Collective",
      },
      sidebar: [
        {
          label: "Introduction",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Welcome", link: "/guides/cool/direction/" },
          ],
        },
        {
          label: "Cool off",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Motivation", link: "/guides/cool/cooloff/" },
            { label: "General", link: "/guides/general/general/" },
          ],
        },
        {
          label: "HTML",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Chapter One", link: "/guides/html/html" },
          ],
        },
        {
          label: "CSS",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "  Essentials", link: "/guides/css/css/" },
          ],
        },
        {
          label: "Important Concepts",
          link: "/guides/concepts/concepts/",
        },
        {
          label: "Javascript",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Chapter One", link: "/guides/js/one/" },
            { label: "Chapter Two", link: "/guides/js/two/" },
            { label: "Chapter Three", link: "/guides/js/three/" },
          ],
        },
        {
          label: "Code snippets",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Chapter One", link: "/guides/snippets/one/" },
            { label: "Chapter Two", link: "/guides/snippets/two/" },
            { label: "Chapter Three", link: "/guides/snippets/three/" },
            { label: "Chapter Four", link: "/guides/snippets/four/" },
          ],
        },

        {
          label: "Modern Frameworks",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Introduction", link: "/guides/frameworks/intro/" },
            { label: "React", link: "/guides/frameworks/react/" },
            { label: "Svelte", link: "/guides/frameworks/svelte/" },
            { label: "Astro", link: "/guides/frameworks/astro/" },
          ],
        },

        {
          label: "Design Patterns",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "vanilla", link: "https://www.patterns.dev/vanilla" },
          ],
        },
        {
          label: "Framework Patterns",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "React", link: "https://www.patterns.dev/react" },
          ],
        },
        {
          label: "Frontend System Design",
          link: "https://www.frontendinterviewhandbook.com/front-end-system-design/",
        },
        {
          label: "Accessibility",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
          ],
        },
        {
          label: "Testing",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
          ],
        },
        {
          label: "Performance",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
          ],
        },
        {
          label: "Network",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
          ],
        },
      ],
    }),
  ],
});
