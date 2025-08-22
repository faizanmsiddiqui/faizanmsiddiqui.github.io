import type { ReactNode } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import InfoCardHorizontal from "@site/src/components/InfoCardHorizontal";
import {
  CloudFlat,
  DesktopComputerFlat,
  GameDieFlat,
  HerbFlat,
  MemoFlat,
  RocketFlat,
  SealFlat,
  SpiralShellFlat,
  SpoutingWhaleFlat,
} from "@site/src/assets/fluentui-emoji";
import { CrystalBall, Penguin, Snake } from "@site/src/assets/noto-emoji";

import styles from "./styles.module.css";

export const iconWidth = 64;
export const iconHeight = 64;

export default function Books(): ReactNode {
  return (
    <Layout
      title="Books"
      description="A collection of writings covering various topics in programming, software development, and more."
    >
      <main className={clsx("container margin-vert--lg", styles.content)}>
        <h1>Books</h1>
        <h2>Programming & Scripting</h2>
        <InfoCardHorizontal
          to="/writings/books/python"
          graphics={<Snake width={iconWidth} height={iconHeight} />}
          title="Python"
          description="A practical guide to Python programming, from basics to advanced topics."
        />
        <hr />
        <h2>Software Development & Tools</h2>
        <InfoCardHorizontal
          to="/writings/books/git"
          graphics={<HerbFlat width={iconWidth} height={iconHeight} />}
          title="Git"
          description="Understand version control, branching, and collaboration with Git."
        />
        <InfoCardHorizontal
          to="/writings/books/devops"
          graphics={<RocketFlat width={iconWidth} height={iconHeight} />}
          title="DevOps"
          description="Explore modern DevOps workflows, CI/CD, and infrastructure as code."
        />
        <hr />
        <h2>Cloud, Infrastructure, Systems, & Virtualization</h2>
        <InfoCardHorizontal
          to="/writings/books/linux"
          graphics={<Penguin width={iconWidth} height={iconHeight} />}
          title="Linux"
          description="A comprehensive guide to Linux system administration and command line skills."
        />
        <InfoCardHorizontal
          to="/writings/books/cloud"
          graphics={<CloudFlat width={iconWidth} height={iconHeight} />}
          title="Cloud"
          description="Navigate cloud computing concepts, services, and deployment strategies."
        />
        <InfoCardHorizontal
          to="/writings/books/bash"
          graphics={<SpiralShellFlat width={iconWidth} height={iconHeight} />}
          title="Bash"
          description="Master automation and shell scripting with hands-on Bash examples and tips."
        />
        <InfoCardHorizontal
          to="/writings/books/powershell"
          graphics={
            <DesktopComputerFlat width={iconWidth} height={iconHeight} />
          }
          title="PowerShell"
          description="PowerShell scripting covering cmdlets, scripts, and automation."
        />
        <InfoCardHorizontal
          to="/writings/books/docker"
          graphics={<SpoutingWhaleFlat width={iconWidth} height={iconHeight} />}
          title="Docker"
          description="Learn containerization fundamentals and advanced Docker techniques."
        />
        <InfoCardHorizontal
          to="/writings/books/podman"
          graphics={<SealFlat width={iconWidth} height={iconHeight} />}
          title="Podman"
          description="Manage containers securely with Podman, a Docker alternative."
        />
        <hr />
        <h2>Documentation & Writing</h2>
        <InfoCardHorizontal
          to="/writings/books/markdown"
          graphics={<MemoFlat width={iconWidth} height={iconHeight} />}
          title="Markdown"
          description="Write beautiful documents with Markdown syntax, tools, and best practices."
        />
        <hr />
        <h2>Sundry</h2>
        <InfoCardHorizontal
          to="/writings/books/wonders"
          graphics={<CrystalBall width={iconWidth} height={iconHeight} />}
          title="Wonders"
          description="A list of wonderful apps, tools, libraries, and other useful resources."
        />
        <InfoCardHorizontal
          to="/writings/books/basement"
          graphics={<GameDieFlat width={iconWidth} height={iconHeight} />}
          title="Basement"
          description="A grab bag of tips, tricks, insights, and other random stuff that doesn't fit anywhere else."
        />
      </main>
    </Layout>
  );
}
