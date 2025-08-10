import Hammering from "./hammering.svg";
import styles from "./styles.module.css";

export default function ConstructionAnimation() {
  return (
    <div className={styles.container}>
      <Hammering className={styles.svg} />
    </div>
  );
}
