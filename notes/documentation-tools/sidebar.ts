import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  seriesSidebar: [
    {
      type: "doc",
      label: "Documentation Tools",
      id: "index",
    },
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
};

export default sidebar;
