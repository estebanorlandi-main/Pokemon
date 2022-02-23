import { Pokeball } from "components/Pokeball/Pokeball";
import styles from "./404.module.css";

export function Error404() {
  return (
    <main className={styles.container}>
      <h1 className={styles.error}>
        4<Pokeball size="md" />
        4!
      </h1>
      <span className={styles.message}>Page not found!</span>
    </main>
  );
}
