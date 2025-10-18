import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const favicon = "images/favicon.svg";
const logo = "images/profile.png";
const socialCard = "images/social-card.png";
const title = "Faizan Siddiqui";
const author = "Faizan Siddiqui";
const url = "https://faizansiddiqui.me";
const baseUrl = "";

const config: Config = {
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: url,
  baseUrl: baseUrl + "/",

  favicon: favicon,
  title: title,

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
        id: "articles",
        path: "articles",
        routeBasePath: "/articles",
        sidebarPath: require.resolve("./articles/sidebar.ts"),
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
        id: "snippets",
        path: "snippets",
        routeBasePath: "/snippets",
        sidebarPath: require.resolve("./snippets/sidebar.ts"),
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

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "alternate",
        type: "application/atom+xml",
        href: "/articles-atom.xml",
        title: "Faizan Siddiqui Articles Atom Feed",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "alternate",
        type: "application/rss+xml",
        href: "/articles-rss.xml",
        title: "Faizan Siddiqui Articles RSS Feed",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "alternate",
        type: "application/atom+xml",
        href: "/blog-atom.xml",
        title: "Faizan Siddiqui Blog Atom Feed",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "alternate",
        type: "application/rss+xml",
        href: "/blog-rss.xml",
        title: "Faizan Siddiqui Blog RSS Feed",
      },
    },
  ],

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "throw",
    },
    mermaid: true,
  },

  onBrokenLinks: "throw",

  themes: [
    "@docusaurus/theme-mermaid",
    "plugin-image-zoom",
    [
      "@easyops-cn/docusaurus-search-local",
      {
        explicitSearchResultPath: true,
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
        language: "en",
        indexBlog: true,
        indexDocs: true,
        indexPages: true,
        docsRouteBasePath: [
          "/articles",
          "/attributions",
          "/",
          "/notes",
          "/projects",
          "/publications",
          "/snippets",
        ],
        blogRouteBasePath: ["/blog"],
        docsDir: [
          "articles",
          "attributions",
          "home",
          "notes",
          "projects",
          "publications",
          "snippets",
        ],
        blogDir: ["blog"],
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
        //   position: "right",
        //   label: "Articles",
        //   to: "/articles/",
        // },
        {
          position: "right",
          label: "Blog",
          to: "/blog/",
        },
        {
          position: "right",
          label: "Notes",
          to: "/notes/",
        },
        {
          position: "right",
          label: "Projects",
          to: "/projects/",
        },
        {
          position: "right",
          label: "Publications",
          to: "/publications/",
        },
        {
          position: "right",
          label: "Snippets",
          to: "/snippets/",
        },
        {
          position: "right",
          type: "search",
        },
      ],
    },
    footer: {
      style: "light",
      copyright: `Copyright © ${new Date().getFullYear()} ${author}.<br>Made with ❤️ and <a href="${baseUrl}/attributions"><strong>these amazing resources</strong></a>.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
