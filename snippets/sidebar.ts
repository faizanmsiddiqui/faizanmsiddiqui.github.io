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
        "hello-aioquic-quic-implementation-with-python/index",
        "hello-quic-go-quic-implementation-with-go/index",
        "linux-network-interfaces-manager-using-pyqt6/index",
        "physical-network-interface-status-monitor-with-flask/index",
        "physical-network-interface-status-monitor-with-pyqt5/index",
      ],
    },
  ],
};

export default sidebar;
