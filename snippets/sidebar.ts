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
      items: ["physical-network-interface-status-monitor-with-flask/index"],
    },
  ],
};

export default sidebar;
