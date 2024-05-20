import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Frontend Collective",
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
            { label: "Example Guide", link: "/guides/example/" },
          ],
        },
        {
          label: "Javascript",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Chapter One", link: "/guides/js/js/" },
          ],
        },

        {
          label: "React",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
          ],
        },
        {
          label: "Code snippets",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Chapter One", link: "/guides/snippets/one/" },
            { label: "Level 2", link: "/guides/snippets/two/" },
            { label: "Level 3", link: "/guides/snippets/three/" },
            { label: "Level 4", link: "/guides/snippets/four/" },
          ],
        },
        {
          label: "Important Concepts",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Event Loop", link: "/guides/concepts/concepts/" },
          ],
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
