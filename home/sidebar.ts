import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  seriesSidebar: [
    {
      type: "category",
      label: "Home",
      link: {
        type: "doc",
        id: "index",
      },
      items: [],
    },
    // {
    //   type: "category",
    //   label: "About",
    //   link: {
    //     type: "doc",
    //     id: "about/index",
    //   },
    //   items: [],
    // },
    // {
    //   type: "category",
    //   label: "Resume",
    //   link: {
    //     type: "doc",
    //     id: "resume/index",
    //   },
    //   items: [],
    // },
    {
      type: "category",
      label: "Socials",
      link: {
        type: "doc",
        id: "socials/index",
      },
      items: [],
    },
  ],
};

export default sidebar;
