import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  seriesSidebar: [
    {
      type: "category",
      label: "Wonders",
      link: {
        type: "doc",
        id: "index",
      },
      items: [
        "emoji-sets/index",
        "text-editors/index",
      ],
    },
  ],
};

export default sidebar;
