import styles from './Pokeball.module.css';

const sizes = {
  xsm: styles.xsm,
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
};

export default function Pokeball({ size = 'sm' }) {
  return (
    <div className={`${styles.pokeball} ${sizes[size]}`}>
      <div className={styles.top} />
      <div className={styles.center} />
      <div className={styles.bottom} />
    </div>
  );
}
