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

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

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
      "@docusaurus/plugin-content-pages",
      {
        id: "home",
        path: "sections/home",
        routeBasePath: "/",
      },
    ],
    [
      "@docusaurus/plugin-content-pages",
      {
        id: "about",
        path: "sections/about",
        routeBasePath: "/about",
      },
    ],
    [
      "@docusaurus/plugin-content-pages",
      {
        id: "links",
        path: "sections/links",
        routeBasePath: "/links",
      },
    ],
    [
      "@docusaurus/plugin-content-pages",
      {
        id: "projects",
        path: "sections/projects",
        routeBasePath: "/projects",
      },
    ],
    [
      "@docusaurus/plugin-content-pages",
      {
        id: "publications",
        path: "sections/publications",
        routeBasePath: "/publications",
      },
    ],
    [
      "@docusaurus/plugin-content-pages",
      {
        id: "resume",
        path: "sections/resume",
        routeBasePath: "/resume",
      },
    ],
    [
      "@docusaurus/plugin-content-pages",
      {
        id: "writings",
        path: "sections/writings",
        routeBasePath: "/writings",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "bash",
        path: "books/bash",
        routeBasePath: "/writings/books/bash",
        sidebarPath: require.resolve("./books/bash/sidebar.ts"),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "cloud",
        path: "books/cloud",
        routeBasePath: "/writings/books/cloud",
        sidebarPath: require.resolve("./books/cloud/sidebar.ts"),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "devops",
        path: "books/devops",
        routeBasePath: "/writings/books/devops",
        sidebarPath: require.resolve("./books/devops/sidebar.ts"),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docker",
        path: "books/docker",
        routeBasePath: "/writings/books/docker",
        sidebarPath: require.resolve("./books/docker/sidebar.ts"),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "git",
        path: "books/git",
        routeBasePath: "/writings/books/git",
        sidebarPath: require.resolve("./books/git/sidebar.ts"),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "linux",
        path: "books/linux",
        routeBasePath: "/writings/books/linux",
        sidebarPath: require.resolve("./books/linux/sidebar.ts"),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "markdown",
        path: "books/markdown",
        routeBasePath: "/writings/books/markdown",
        sidebarPath: require.resolve("./books/markdown/sidebar.ts"),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "podman",
        path: "books/podman",
        routeBasePath: "/writings/books/podman",
        sidebarPath: require.resolve("./books/podman/sidebar.ts"),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "python",
        path: "books/python",
        routeBasePath: "/writings/books/python",
        sidebarPath: require.resolve("./books/python/sidebar.ts"),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "wonders",
        path: "books/wonders",
        routeBasePath: "/writings/books/wonders",
        sidebarPath: require.resolve("./books/wonders/sidebar.ts"),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "pages",
        path: "pages",
        routeBasePath: "/writings/pages",
        blogTitle: "Pages",
        blogDescription: "Pages by Faizan Siddiqui",
        blogSidebarTitle: "Pages",
        blogSidebarCount: "ALL",
        postsPerPage: 10,
        showReadingTime: true,
        showLastUpdateTime: true,
        feedOptions: {
          type: ["rss", "atom"],
          xslt: true,
        },
        onInlineTags: "warn",
        onInlineAuthors: "warn",
        onUntruncatedBlogPosts: "warn",
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    image: "img/social-card.png",
    navbar: {
      title: "Faizan Siddiqui",
      logo: {
        alt: "faizan siddiqui website logo",
        src: "img/logo.png",
      },
      items: [
        {
          position: "left",
          label: "About",
          to: "/about",
        },
        {
          position: "left",
          label: "Links",
          to: "/links",
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
          position: "left",
          label: "Writings",
          to: "/writings",
          type: "dropdown",
          items: [
            {
              label: "Books",
              to: "/writings/books",
            },
            {
              label: "Pages",
              to: "/writings/pages",
            },
          ],
        },
        {
          position: "right",
          label: "Email",
          href: "mailto:imfsiddiqui@yahoo.com",
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
      additionalLanguages: ["bash", "batch", "powershell", "shell-session"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
