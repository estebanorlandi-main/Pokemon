import styles from "./PrimaryButton.module.css";

function PrimaryButton({ text, Icon, onClick }) {
  return (
    <button onClick={onClick} className={styles.btn}>
      {Icon ? <Icon /> : null}
      {text}
    </button>
  );
}

export default PrimaryButton;
