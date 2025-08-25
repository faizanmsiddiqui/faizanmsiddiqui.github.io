import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  seriesSidebar: [
    {
      type: "category",
      label: "PowerShell",
      link: {
        type: "doc",
        id: "index",
      },
      items: ["bash-to-powershell-commands-cheat-sheet/index"],
    },
  ],
};

export default sidebar;
