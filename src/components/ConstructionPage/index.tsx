import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import ConstructionAnimation from "./constructionAnimation.svg";
import BarsAnimation from "@site/src/components/BarsAnimation";
import "./styles.module.css";

type ConstructionPageProps = {
  title: string;
  description: string;
};

export default function ConstructionPage({
  title,
  description,
}: ConstructionPageProps): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={title || `${siteConfig.title}`} description={description}>
      <main>
        <ConstructionAnimation />
      </main>
      <BarsAnimation />
    </Layout>
  );
}
