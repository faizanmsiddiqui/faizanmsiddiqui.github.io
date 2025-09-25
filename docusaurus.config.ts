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
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-pages",
      {
        id: "attributions",
        path: "pages/attributions",
        routeBasePath: "/attributions",
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-pages",
      {
        id: "home",
        path: "pages/home",
        routeBasePath: "/",
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-pages",
      {
        id: "notes",
        path: "pages/notes",
        routeBasePath: "/notes",
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-pages",
      {
        id: "projects",
        path: "pages/projects",
        routeBasePath: "/projects",
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-pages",
      {
        id: "publications",
        path: "pages/publications",
        routeBasePath: "/publications",
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-pages",
      {
        id: "resume",
        path: "pages/resume",
        routeBasePath: "/resume",
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-pages",
      {
        id: "socials",
        path: "pages/socials",
        routeBasePath: "/socials",
        showLastUpdateTime: true,
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
        id: "artificial-intelligence-and-data-science",
        path: "notes/artificial-intelligence-and-data-science",
        routeBasePath: "/notes/artificial-intelligence-and-data-science",
        sidebarPath: require.resolve(
          "./notes/artificial-intelligence-and-data-science/sidebar.ts"
        ),
        breadcrumbs: false,
        showLastUpdateTime: true,
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
        id: "communication-and-networking",
        path: "notes/communication-and-networking",
        routeBasePath: "/notes/communication-and-networking",
        sidebarPath: require.resolve(
          "./notes/communication-and-networking/sidebar.ts"
        ),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "design-and-human-technology-interaction",
        path: "notes/design-and-human-technology-interaction",
        routeBasePath: "/notes/design-and-human-technology-interaction",
        sidebarPath: require.resolve(
          "./notes/design-and-human-technology-interaction/sidebar.ts"
        ),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "documentation-and-writing",
        path: "notes/documentation-and-writing",
        routeBasePath: "/notes/documentation-and-writing",
        sidebarPath: require.resolve(
          "./notes/documentation-and-writing/sidebar.ts"
        ),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "embedded-systems-internet-of-things-and-robotics",
        path: "notes/embedded-systems-internet-of-things-and-robotics",
        routeBasePath:
          "/notes/embedded-systems-internet-of-things-and-robotics",
        sidebarPath: require.resolve(
          "./notes/embedded-systems-internet-of-things-and-robotics/sidebar.ts"
        ),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "game-gamification-and-game-studies",
        path: "notes/game-gamification-and-game-studies",
        routeBasePath: "/notes/game-gamification-and-game-studies",
        sidebarPath: require.resolve(
          "./notes/game-gamification-and-game-studies/sidebar.ts"
        ),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "information-system-and-security",
        path: "notes/information-system-and-security",
        routeBasePath: "/notes/information-system-and-security",
        sidebarPath: require.resolve(
          "./notes/information-system-and-security/sidebar.ts"
        ),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "programming-and-development",
        path: "notes/programming-and-development",
        routeBasePath: "/notes/programming-and-development",
        sidebarPath: require.resolve(
          "./notes/programming-and-development/sidebar.ts"
        ),
        breadcrumbs: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "software-and-system-engineering",
        path: "notes/software-and-system-engineering",
        routeBasePath: "/notes/software-and-system-engineering",
        sidebarPath: require.resolve(
          "./notes/software-and-system-engineering/sidebar.ts"
        ),
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
          type: "dropdown",
          items: [
            {
              label: "🧑‍💻 Software and System Engineering",
              to: "/notes/software-and-system-engineering/",
            },
            {
              label: "💻 Programming and Development",
              to: "/notes/programming-and-development/",
            },
            {
              label: "🎲 Basement",
              to: "/notes/basement/",
            },
          ],
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
          type: "dropdown",
          items: [
            {
              label: "🧑‍🎨 Design Resources",
              to: "/wonders/design-resources/",
            },
            {
              label: "🧑‍💻 Development Tools",
              to: "/wonders/development-tools/",
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
