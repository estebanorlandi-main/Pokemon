import styles from "./Page.module.css";

export function Page({ children, className, ...props }) {
  return (
    <button className={`${styles.btn} ${className || ""}`} {...props}>
      {children}
    </button>
  );
}
