import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  seriesSidebar: [
    {
      type: "category",
      label: "Publications",
      link: {
        type: "doc",
        id: "index",
      },
      items: [
        "conference-papers/index",
        "theses-research-projects/index",
      ],
    },
  ],
};

export default sidebar;
