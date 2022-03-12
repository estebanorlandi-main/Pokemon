import styles from './Secondary.module.css';

export default function Secondary({ onClick, children }) {
  return (
    <button className={styles.btn} onClick={onClick} type="button">
      {children}
    </button>
  );
}
