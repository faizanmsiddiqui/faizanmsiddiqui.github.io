import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  seriesSidebar: [
    {
      type: "category",
      label: "Snippets",
      link: {
        type: "doc",
        id: "index",
      },
      items: [
        "hello-aioquic/index",
        "hello-quic-go/index",
        "network-interface-monitor-flask/index",
        "network-interface-monitor-pyqt5/index",
      ],
    },
  ],
};

export default sidebar;
