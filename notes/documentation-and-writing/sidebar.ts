import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  seriesSidebar: [
    {
      type: "category",
      label: "Documentation and Writing",
      link: {
        type: "doc",
        id: "index",
      },
      items: [
        {
          type: "category",
          label: "Markdown",
          link: {
            type: "doc",
            id: "markdown/index",
          },
          items: [],
        },
      ],
    },
  ],
};

export default sidebar;
