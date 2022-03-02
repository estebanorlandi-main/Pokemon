import styles from "./PrimaryButton.module.css";

export function PageButton({ text, Icon, onClick }) {
  return (
    <button onClick={onClick} className={styles.btn}>
      {Icon ? <Icon className={styles.icon} /> : null}
      {text}
    </button>
  );
}
