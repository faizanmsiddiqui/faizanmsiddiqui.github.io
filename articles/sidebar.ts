import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  seriesSidebar: [
    {
      type: "category",
      label: "Articles",
      link: {
        type: "doc",
        id: "index",
      },
      items: [
        "http-messages/index",
        "understanding-https/index",
        "what-is-http/index",
        "comments-in-rust/index",
        "what-is-rust/index",
        "hello-git/index",
        "what-is-git/index",
        "open-rmf-on-ubuntu-2404-with-ros-2-jazzy-jalisco/index",
        "open-rmf-on-ubuntu-2404-with-ros-2-kilted-kaiju/index",
        "virtualbox-on-windows-11-beginners-guide/index",
      ],
    },
  ],
};

export default sidebar;
