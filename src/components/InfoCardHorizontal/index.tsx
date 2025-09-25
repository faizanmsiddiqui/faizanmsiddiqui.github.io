import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

interface InfoCardHorizontalProps {
  to: string;
  graphics: React.ReactNode;
  title: string;
  description: string;
  backgroundColor?: string;
}

const InfoCardHorizontal: React.FC<InfoCardHorizontalProps> = ({
  to,
  graphics,
  title,
  description,
  backgroundColor,
}) => {
  return (
    <Link
      className={styles.card}
      to={to}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <div className={styles.content}>
        <div className={styles.graphics}>{graphics}</div>
        <div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default InfoCardHorizontal;
