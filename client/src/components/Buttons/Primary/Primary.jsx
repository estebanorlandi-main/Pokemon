import styles from "./Primary.module.css";

export function Primary({ children, className, ...props }) {
  return (
    <button className={`${styles.btn} ${className || ""}`} {...props}>
      {children}
    </button>
  );
}
