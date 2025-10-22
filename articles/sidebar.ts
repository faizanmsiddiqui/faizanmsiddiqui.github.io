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
        "guide-to-install-open-rmf-on-ubuntu-2404-with-ros-2-jazzy-jalisco/index",
        "guide-to-install-open-rmf-on-ubuntu-2404-with-ros-2-kilted-kaiju/index",
        "virtualbox-on-windows-11-beginners-guide/index",
      ],
    },
  ],
};

export default sidebar;
