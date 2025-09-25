import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  seriesSidebar: [
    {
      type: "category",
      label: "Programming and Development",
      link: {
        type: "doc",
        id: "index",
      },
      items: [
        {
          type: "category",
          label: "Go (Golang)",
          link: {
            type: "doc",
            id: "go/index",
          },
          items: [],
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
        {
          type: "category",
          label: "Python",
          link: {
            type: "doc",
            id: "python/index",
          },
          items: [],
        },
        {
          type: "category",
          label: "Rust",
          link: {
            type: "doc",
            id: "rust/index",
          },
          items: [
            "rust/what-is-rust/index",
            "rust/hello-rust/index",
            "rust/comments/index",
            "rust/data-types/index",
            "rust/more-data-types/index",
          ],
        },
      ],
    },
  ],
};

export default sidebar;
