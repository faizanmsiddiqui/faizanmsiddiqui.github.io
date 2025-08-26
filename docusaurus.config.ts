import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const favicon = "images/favicon.svg";
const logo = "images/profile.png";
const socialCard = "images/social-card.png";
const title = "Faizan Siddiqui";

const config: Config = {
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: "https://faizansiddiqui.me",
  baseUrl: "/",

  favicon: favicon,
  title: title,

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

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
    "plugin-image-zoom",
    [
      "@docusaurus/plugin-content-pages",
      {
        id: "about",
        path: "pages/about",
        routeBasePath: "/about",
      },
    ],
    [
      "@docusaurus/plugin-content-pages",
      {
        id: "attributions",
        path: "pages/attributions",
        routeBasePath: "/attributions",
      },
    ],
    [
      "@docusaurus/plugin-content-pages",
      {
        id: "home",
        path: "pages/home",
        routeBasePath: "/",
      },
    ],
    [
      "@docusaurus/plugin-content-pages",
      {
        id: "notes",
        path: "pages/notes",
        routeBasePath: "/notes",
      },
    ],
    [
      "@docusaurus/plugin-content-pages",
      {
        id: "projects",
        path: "pages/projects",
        routeBasePath: "/projects",
      },
    ],
    [
      "@docusaurus/plugin-content-pages",
      {
        id: "publications",
        path: "pages/publications",
        routeBasePath: "/publications",
      },
    ],
    [
      "@docusaurus/plugin-content-pages",
      {
        id: "resume",
        path: "pages/resume",
        routeBasePath: "/resume",
      },
    ],
    [
      "@docusaurus/plugin-content-pages",
      {
        id: "socials",
        path: "pages/socials",
        routeBasePath: "/socials",
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "blog",
        path: "blog",
        routeBasePath: "/blog",
        blogTitle: "Blog",
        blogDescription: "A collection of my personal blog posts.",
        blogSidebarTitle: "Blog",
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
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "basement",
        path: "notes/basement",
        routeBasePath: "/notes/basement",
        sidebarPath: require.resolve("./notes/basement/sidebar.ts"),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "bash",
        path: "notes/bash",
        routeBasePath: "/notes/bash",
        sidebarPath: require.resolve("./notes/bash/sidebar.ts"),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "cloud",
        path: "notes/cloud",
        routeBasePath: "/notes/cloud",
        sidebarPath: require.resolve("./notes/cloud/sidebar.ts"),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "devops",
        path: "notes/devops",
        routeBasePath: "/notes/devops",
        sidebarPath: require.resolve("./notes/devops/sidebar.ts"),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docker",
        path: "notes/docker",
        routeBasePath: "/notes/docker",
        sidebarPath: require.resolve("./notes/docker/sidebar.ts"),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "git",
        path: "notes/git",
        routeBasePath: "/notes/git",
        sidebarPath: require.resolve("./notes/git/sidebar.ts"),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "linux",
        path: "notes/linux",
        routeBasePath: "/notes/linux",
        sidebarPath: require.resolve("./notes/linux/sidebar.ts"),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "markdown",
        path: "notes/markdown",
        routeBasePath: "/notes/markdown",
        sidebarPath: require.resolve("./notes/markdown/sidebar.ts"),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "podman",
        path: "notes/podman",
        routeBasePath: "/notes/podman",
        sidebarPath: require.resolve("./notes/podman/sidebar.ts"),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "powershell",
        path: "notes/powershell",
        routeBasePath: "/notes/powershell",
        sidebarPath: require.resolve("./notes/powershell/sidebar.ts"),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "python",
        path: "notes/python",
        routeBasePath: "/notes/python",
        sidebarPath: require.resolve("./notes/python/sidebar.ts"),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "wonders",
        path: "wonders",
        routeBasePath: "/wonders",
        sidebarPath: require.resolve("./wonders/sidebar.ts"),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/notes/basement/docker-versus-podman-a-comparison/",
            from: ["/writings/pages/docker-versus-podman-a-comparison/"],
          },
          {
            to: "/notes/basement/guide-to-install-open-rmf-on-ubuntu-2404-with-ros-2-jazzy-jalisco/",
            from: [
              "/writings/pages/guide-to-install-open-rmf-on-ubuntu-2404-with-ros-2-jazzy-jalisco/",
            ],
          },
          {
            to: "/notes/basement/guide-to-install-open-rmf-on-ubuntu-2404-with-ros-2-kilted-kaiju/",
            from: [
              "/writings/pages/guide-to-install-open-rmf-on-ubuntu-2404-with-ros-2-kilted-kaiju/",
            ],
          },
          {
            to: "/notes/basement/virtualbox-on-windows-11-beginners-guide/",
            from: ["/writings/pages/virtualbox-on-windows-11-beginners-guide/"],
          },
        ],
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "batch", "powershell", "shell-session"],
    },
    imageZoom: {
      selector: ".markdown img",
      options: {
        background: "var(--ifm-background-color)",
      },
    },
    image: socialCard,
    navbar: {
      title: title,
      logo: {
        alt: `${title} website logo`,
        src: logo,
      },
      items: [
        {
          position: "left",
          label: "About",
          to: "/about",
        },
        {
          position: "left",
          label: "Blog",
          to: "/blog",
        },
        {
          position: "left",
          label: "Notes",
          to: "/notes",
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
          label: "Wonders",
          to: "/wonders",
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
        {
          position: "right",
          label: "Socials",
          to: "/socials",
        },
      ],
    },
    footer: {
      style: "light",
      copyright: `Copyright © ${new Date().getFullYear()} ${title}.<br>Made with ❤️ and <a href="/attributions"><strong>these amazing resources</strong></a>.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
