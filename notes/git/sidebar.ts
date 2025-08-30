import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  seriesSidebar: [
    {
      type: "category",
      label: "Git",
      link: {
        type: "doc",
        id: "index",
      },
      items: ["what-is-git/index"],
    },
  ],
};

export default sidebar;
