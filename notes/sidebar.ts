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
        // {
        //   type: "category",
        //   label: "Artificial Intelligence and Data Science",
        //   link: {
        //     type: "doc",
        //     id: "artificial-intelligence-and-data-science/index",
        //   },
        //   items: [],
        // },
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
                "software-and-system-engineering/git/what-is-git/index",
                "software-and-system-engineering/git/hello-git/index",
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
        {
          type: "category",
          label: "Programming and Development",
          link: {
            type: "doc",
            id: "programming-and-development/index",
          },
          collapsed: false,
          items: [
            // {
            //   type: "category",
            //   label: "Go (Golang)",
            //   link: {
            //     type: "doc",
            //     id: "programming-and-development/go/index",
            //   },
            //   items: [],
            // },
            // {
            //   type: "category",
            //   label: "Python",
            //   link: {
            //     type: "doc",
            //     id: "programming-and-development/python/index",
            //   },
            //   items: [],
            // },
            {
              type: "category",
              label: "Rust",
              link: {
                type: "doc",
                id: "programming-and-development/rust/index",
              },
              items: [
                "programming-and-development/rust/what-is-rust/index",
                "programming-and-development/rust/hello-rust/index",
                "programming-and-development/rust/comments/index",
                "programming-and-development/rust/data-types/index",
                "programming-and-development/rust/more-data-types/index",
              ],
            },
          ],
        },
        // {
        //   type: "category",
        //   label: "Information System and Security",
        //   link: {
        //     type: "doc",
        //     id: "information-system-and-security/index",
        //   },
        //   items: [],
        // },
        // {
        //   type: "category",
        //   label: "Embedded Systems, Internet of Things (IoT), and Robotics",
        //   link: {
        //     type: "doc",
        //     id: "embedded-systems-internet-of-things-and-robotics/index",
        //   },
        //   items: [],
        // },
        // {
        //   type: "category",
        //   label: "Communication and Networking",
        //   link: {
        //     type: "doc",
        //     id: "communication-and-networking/index",
        //   },
        //   items: [],
        // },
        // {
        //   type: "category",
        //   label: "Design and Human-Technology Interaction",
        //   link: {
        //     type: "doc",
        //     id: "design-and-human-technology-interaction/index",
        //   },
        //   items: [],
        // },
        // {
        //   type: "category",
        //   label: "Game, Gamification, and Game Studies",
        //   link: {
        //     type: "doc",
        //     id: "game-gamification-and-game-studies/index",
        //   },
        //   items: [],
        // },
        // {
        //   type: "category",
        //   label: "Documentation and Writing",
        //   link: {
        //     type: "doc",
        //     id: "documentation-and-writing/index",
        //   },
        //   items: [
        //     {
        //       type: "category",
        //       label: "Markdown",
        //       link: {
        //         type: "doc",
        //         id: "documentation-and-writing/markdown/index",
        //       },
        //       items: [],
        //     },
        //   ],
        // },
        {
          type: "category",
          label: "Basement",
          link: {
            type: "doc",
            id: "basement/index",
          },
          items: [
            "basement/docker-versus-podman-a-comparison/index",
            "basement/guide-to-install-open-rmf-on-ubuntu-2404-with-ros-2-jazzy-jalisco/index",
            "basement/guide-to-install-open-rmf-on-ubuntu-2404-with-ros-2-kilted-kaiju/index",
            "basement/virtualbox-on-windows-11-beginners-guide/index",
          ],
        },
        {
          type: "category",
          label: "Wonders",
          link: {
            type: "doc",
            id: "wonders/index",
          },
          items: [
            "wonders/design-resources/index",
            "wonders/development-tools/index",
          ],
        },
      ],
    },
  ],
};

export default sidebar;
