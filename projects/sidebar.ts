import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  seriesSidebar: [
    {
      type: "category",
      label: "Projects",
      link: {
        type: "doc",
        id: "index",
      },
      items: [
        {
          type: "doc",
          label: "brepo",
          id: "brepo/index",
        },
        {
          type: "doc",
          label: "centinum",
          id: "centinum/index",
        },
        {
          type: "doc",
          label: "ipm",
          id: "ipm/index",
        },
        {
          type: "doc",
          label: "logkey",
          id: "logkey/index",
        },
        {
          type: "doc",
          label: "monitory",
          id: "monitory/index",
        },
        {
          type: "doc",
          label: "nexus",
          id: "nexus/index",
        },
        {
          type: "doc",
          label: "wonders",
          id: "wonders/index",
        },
      ],
    },
  ],
};

export default sidebar;
