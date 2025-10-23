import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  seriesSidebar: [
    {
      type: "category",
      label: "Notes",
      link: {
        type: "doc",
        id: "index",
      },
      items: [
        {
          type: "category",
          label: "Git",
          link: {
            type: "doc",
            id: "git/index",
          },
          items: ["git/commands-cheat-sheet/index", "git/glossary/index"],
        },
        {
          type: "category",
          label: "PowerShell",
          link: {
            type: "doc",
            id: "powershell/index",
          },
          items: ["powershell/bash-to-powershell-commands-cheat-sheet/index"],
        },
      ],
    },
  ],
};

export default sidebar;
