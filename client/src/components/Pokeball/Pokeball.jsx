import styles from "./Pokeball.module.css";

export function Pokeball() {
  return (
    <div className={styles.pokeball}>
      <div className={styles.top}></div>
      <div className={styles.center}></div>
      <div className={styles.bottom}></div>
    </div>
  );
}
