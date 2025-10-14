import { Construction } from "@site/src/assets/kit";
import styles from "./styles.module.css";

function ConstructionAnimation() {
  return (
    <div className={styles.container}>
      <Construction className={styles.svg} />
    </div>
  );
}

export default ConstructionAnimation;
