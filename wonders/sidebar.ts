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
        {
          type: "category",
          label: "Design Resources",
          link: {
            type: "doc",
            id: "design-resources/index",
          },
          items: ["design-resources/emoji-sets/index"],
        },
        {
          type: "category",
          label: "Development Tools",
          link: {
            type: "doc",
            id: "development-tools/index",
          },
          items: ["development-tools/text-editors/index"],
        },
      ],
    },
  ],
};

export default sidebar;
