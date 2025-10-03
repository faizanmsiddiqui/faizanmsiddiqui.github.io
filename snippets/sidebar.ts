import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  seriesSidebar: [
    {
      type: "category",
      label: "Snippets",
      link: {
        type: "doc",
        id: "index",
      },
      items: [
        {
          type: "category",
          label: "Go (Golang)",
          link: {
            type: "doc",
            id: "go/index",
          },
          collapsed: false,
          items: [],
        },
        {
          type: "category",
          label: "Python",
          link: {
            type: "doc",
            id: "python/index",
          },
          collapsed: false,
          items: [],
        },
      ],
    },
  ],
};

export default sidebar;
