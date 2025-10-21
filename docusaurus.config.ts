// This file runs in Node.js, client-side (browser APIs, JSX...) code won't work
// here.

import fs from "fs";
import yaml from "js-yaml";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { themes as prismThemes } from "prism-react-renderer";

interface SiteConfig {
  title: string;
  author: string;
  url: string;
  baseUrl: string;
  favicon: string;
  logo: string;
  socialCard: string;
  feeds: {
    contentDirs: string[];
    outputDir: string;
  };
  tags: {
    sourceFile: string;
    destinationDirs: string[];
    destinationFile: string;
  };
}

const { title, author, url, baseUrl, favicon, logo, socialCard, feeds } =
  yaml.load(fs.readFileSync("site.config.yaml", "utf8")) as SiteConfig;

const headTags = feeds.contentDirs.flatMap((feed) => [
  {
    tagName: "link",
    attributes: {
      rel: "alternate",
      type: "application/rss+xml",
      href: `/${feed}-rss.xml`,
      title: `${title} ${
        feed.charAt(0).toUpperCase() + feed.slice(1)
      } RSS Feed`,
    },
  },
  {
    tagName: "link",
    attributes: {
      rel: "alternate",
      type: "application/atom+xml",
      href: `/${feed}-atom.xml`,
      title: `${title} ${
        feed.charAt(0).toUpperCase() + feed.slice(1)
      } Atom Feed`,
    },
  },
]);

const config: Config = {
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  title: title,
  url: url,
  baseUrl: baseUrl + "/",

  favicon: favicon,

  headTags: headTags,
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "throw",
    },
    mermaid: true,
  },
  onBrokenLinks: "throw",

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
        id: "blog",
        path: "blog",
        routeBasePath: "/blog",
        sidebarPath: require.resolve("./blog/sidebar.ts"),
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
        indexBlog: false,
        indexDocs: true,
        indexPages: true,
        docsDir: [
          "articles",
          "attributions",
          "blog",
          "home",
          "notes",
          "projects",
          "publications",
          "snippets",
        ],
        docsRouteBasePath: [
          "/articles",
          "/attributions",
          "/blog",
          "/",
          "/notes",
          "/projects",
          "/publications",
          "/snippets",
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
    image: socialCard,
    imageZoom: {
      selector: ".markdown img",
      options: {
        background: "#1b1b1d",
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
    navbar: {
      title: title,
      logo: {
        alt: `${title} website logo`,
        src: logo,
      },
      items: [
        {
          position: "right",
          label: "Articles",
          to: "/articles/",
        },
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
          label: "Publications",
          to: "/publications/",
        },
        {
          position: "right",
          type: "html",
          value: '<div class="navbar-separator"></div>',
        },
        {
          position: "right",
          label: "Projects",
          to: "/projects/",
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
