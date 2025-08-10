import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

interface InfoCardHorizontalProps {
  emoji: string;
  title: string;
  description: string;
  to: string;
}

const InfoCardHorizontal: React.FC<InfoCardHorizontalProps> = ({
  emoji,
  title,
  description,
  to,
}) => {
  return (
    <Link className={styles.card} to={to}>
      <div className={styles.content}>
        <div className={styles.emoji}>{emoji}</div>
        <div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default InfoCardHorizontal;
