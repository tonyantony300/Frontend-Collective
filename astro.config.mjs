import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Frontend Question Bank",
      sidebar: [
        {
          label: "Introduction",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Welcome", link: "/guides/one/" },
          ],
        },
        {
          label: "Cool off",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Lets start with this", link: "/guides/cool/cooloff/" },
          ],
        },
        {
          label: "General",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
          ],
        },
        {
          label: "HTML",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
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
            { label: "Example Guide", link: "/guides/example/" },
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
            { label: "Level 1", link: "/guides/snippets/one/" },
            { label: "Level 2", link: "/guides/snippets/two/" },
            { label: "Level 3", link: "/guides/snippets/three/" },
            { label: "Level 4", link: "/guides/snippets/four/" },
          ],
        },
      ],
    }),
  ],
});
