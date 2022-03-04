import styles from './Primary.module.css';

export default function Primary({ children, className, onClick }) {
  return (
    <button
      type="button"
      className={`${styles.btn} ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
