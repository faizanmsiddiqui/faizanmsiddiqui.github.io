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
          label: "Software and System Engineering",
          link: {
            type: "doc",
            id: "software-and-system-engineering/index",
          },
          collapsed: false,
          items: [
            {
              type: "category",
              label: "Git",
              link: {
                type: "doc",
                id: "software-and-system-engineering/git/index",
              },
              items: [
                "software-and-system-engineering/git/commands-cheat-sheet/index",
                "software-and-system-engineering/git/glossary/index",
              ],
            },
            {
              type: "category",
              label: "PowerShell",
              link: {
                type: "doc",
                id: "software-and-system-engineering/powershell/index",
              },
              items: [
                "software-and-system-engineering/powershell/bash-to-powershell-commands-cheat-sheet/index",
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default sidebar;
