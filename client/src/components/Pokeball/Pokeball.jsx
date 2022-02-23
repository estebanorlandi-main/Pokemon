import styles from "./Pokeball.module.css";

const sizes = {
  xsm: styles.xsm,
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
};

export function Pokeball({ size = "sm" }) {
  return (
    <div className={`${styles.pokeball} ${sizes[size]}`}>
      <div className={styles.top}></div>
      <div className={styles.center}></div>
      <div className={styles.bottom}></div>
    </div>
  );
}
