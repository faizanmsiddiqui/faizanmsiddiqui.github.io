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

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "throw",
    },
    mermaid: true,
  },
  themes: [
    "@docusaurus/theme-mermaid",
    "plugin-image-zoom",
    [
      "@easyops-cn/docusaurus-search-local",
      {
        indexBlog: true,
        indexDocs: true,
        indexPages: true,
        docsRouteBasePath: [
          "/about",
          "/attributions",
          "/",
          "/notes",
          "/projects",
          "/publications",
          "/resume",
          "/snippets",
          "/socials",
          "/wonders",
        ],
        blogRouteBasePath: ["/blog"],
        language: "en",
        hashed: true,
        docsDir: [
          "about",
          "attributions",
          "home",
          "notes",
          "projects",
          "publications",
          "resume",
          "snippets",
          "socials",
          "wonders",
        ],
        blogDir: ["blog"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

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
        id: "about",
        path: "about",
        routeBasePath: "/about",
        sidebarPath: require.resolve("./about/sidebar.ts"),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "attributions",
        path: "attributions",
        routeBasePath: "/attributions",
        sidebarPath: require.resolve("./attributions/sidebar.ts"),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "home",
        path: "home",
        routeBasePath: "/",
        sidebarPath: require.resolve("./home/sidebar.ts"),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "notes",
        path: "notes",
        routeBasePath: "/notes",
        sidebarPath: require.resolve("./notes/sidebar.ts"),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "projects",
        path: "projects",
        routeBasePath: "/projects",
        sidebarPath: require.resolve("./projects/sidebar.ts"),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "publications",
        path: "publications",
        routeBasePath: "/publications",
        sidebarPath: require.resolve("./publications/sidebar.ts"),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "resume",
        path: "resume",
        routeBasePath: "/resume",
        sidebarPath: require.resolve("./resume/sidebar.ts"),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "socials",
        path: "socials",
        routeBasePath: "/socials",
        sidebarPath: require.resolve("./socials/sidebar.ts"),
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
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        "bash",
        "batch",
        "http",
        "powershell",
        "shell-session",
      ],
    },
    imageZoom: {
      selector: ".markdown img",
      options: {
        background: "#1b1b1d",
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
        // {
        //   position: "left",
        //   label: "About",
        //   to: "/about/",
        // },
        {
          position: "left",
          label: "Blog",
          to: "/blog/",
        },
        {
          position: "left",
          label: "Notes",
          to: "/notes/",
        },
        // {
        //   position: "left",
        //   label: "Projects",
        //   to: "/projects/",
        // },
        {
          position: "left",
          label: "Publications",
          to: "/publications/",
        },
        // {
        //   position: "left",
        //   label: "Resume",
        //   to: "/resume/",
        // },
        {
          position: "left",
          label: "Wonders",
          to: "/wonders/",
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
          to: "/socials/",
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
