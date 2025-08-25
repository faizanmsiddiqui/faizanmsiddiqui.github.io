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
      items: ["design-resources/index", "development-tools/index"],
    },
  ],
};

export default sidebar;
