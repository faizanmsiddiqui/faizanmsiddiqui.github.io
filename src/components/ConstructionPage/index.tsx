import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import ConstructionAnimation from "@site/src/components/ConstructionAnimation";
import BarsAnimation from "@site/src/components/BarsAnimation";

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
