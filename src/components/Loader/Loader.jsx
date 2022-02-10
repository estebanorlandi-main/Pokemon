import styles from "./Loader.module.css";

export function Loader() {
  return (
    <div className={styles.loader}>
      <p>Loading...</p>
      <div className={styles.pokeball}>
        <div className={styles.top}></div>
        <div className={styles.center}></div>
        <div className={styles.bottom}></div>
      </div>
    </div>
  );
}
