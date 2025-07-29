import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  favicon: "img/favicon.svg",
  title: "Faizan Siddiqui",
  tagline: "Dinosaurs are cool",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://faizansiddiqui.me",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "imfsiddiqui", // Usually your GitHub org/user name.
  projectName: "imfsiddiqui.github.io", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: false,
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "articles",
        path: "writings/articles",
        routeBasePath: "writings/articles",
        sidebarPath: require.resolve("./config/sidebars/articles.ts"),
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "blog",
        path: "writings/blog",
        routeBasePath: "writings/blog",
        showReadingTime: true,
        feedOptions: {
          type: ["rss", "atom"],
          xslt: true,
        },
        onInlineTags: "warn",
        onInlineAuthors: "warn",
        onUntruncatedBlogPosts: "warn",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "notes",
        path: "writings/notes",
        routeBasePath: "writings/notes",
        sidebarPath: require.resolve("./config/sidebars/notes.ts"),
      },
    ],
  ],
  themeConfig: {
    image: "img/social-card.png",
    navbar: {
      title: "Faizan Siddiqui",
      logo: {
        alt: "faizan siddiqui website logo",
        src: "img/logo.svg",
      },
      items: [
        {
          position: "left",
          label: "About",
          to: "/about",
        },
        {
          position: "left",
          label: "Projects",
          to: "/projects",
        },
        {
          position: "left",
          label: "Publications",
          to: "/publications",
        },
        {
          position: "left",
          label: "Resume",
          to: "/resume",
        },
        {
          type: "dropdown",
          position: "left",
          label: "Writings",
          to: "/writings",
          items: [
            {
              label: "Articles",
              to: "/writings/articles",
            },
            {
              label: "Blog",
              to: "/writings/blog",
            },
            {
              label: "Notes",
              to: "/writings/notes",
            },
          ],
        },
        {
          position: "right",
          label: "Links",
          to: "/links",
        },
        {
          position: "right",
          label: "Email",
          href: "mailto://imfsiddiqui@yahoo.com",
        },
        {
          position: "right",
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/imfsiddiqui",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Faizan Siddiqui.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
