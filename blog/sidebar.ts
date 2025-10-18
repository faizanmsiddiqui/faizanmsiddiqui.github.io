import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  seriesSidebar: [
    {
      type: "category",
      label: "Blog",
      link: {
        type: "doc",
        id: "index",
      },
      items: [
        "hello-world/index",
      ],
    },
  ],
};

export default sidebar;
