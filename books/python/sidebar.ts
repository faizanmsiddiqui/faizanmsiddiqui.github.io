import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  seriesSidebar: [
    {
      type: "category",
      label: "Python",
      link: {
        type: "doc",
        id: "index",
      },
      items: [],
    },
  ],
};

export default sidebar;
