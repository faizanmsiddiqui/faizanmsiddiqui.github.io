import styles from "./styles.module.css";

export default function BarsAnimation() {
  const bars = [
    "#FFB3BA", // Pastel Red
    "#FFDFBA", // Pastel Orange
    "#FFFFBA", // Pastel Yellow
    "#BAFFC9", // Pastel Green
    "#BAE1FF", // Pastel Blue
    "#D3BAFF", // Pastel Purple
    "#FFC9DE", // Pastel Pink
  ];

  return (
    <div className={styles.barContainer}>
      {bars.map((color, idx) => (
        <div
          key={idx}
          className={styles.bar}
          style={{
            backgroundColor: color,
            animationDelay: `${idx * 0.3}s`,
          }}
        />
      ))}
    </div>
  );
}
