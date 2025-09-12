import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  seriesSidebar: [
    {
      type: "doc",
      label: "Programming and Development",
      id: "index",
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
};

export default sidebar;
