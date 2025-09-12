import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  seriesSidebar: [
    {
      type: "doc",
      label: "Software and System Engineering",
      id: "index",
    },
    {
      type: "category",
      label: "Git",
      link: {
        type: "doc",
        id: "git/index",
      },
      items: [
        "git/what-is-git/index",
        "git/hello-git/index",
        "git/commands-cheat-sheet/index",
        "git/glossary/index",
      ],
    },
  ],
};

export default sidebar;
