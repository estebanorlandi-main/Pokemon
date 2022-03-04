import styles from './Page.module.css';

export default function Page({ children, className, onClick }) {
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
