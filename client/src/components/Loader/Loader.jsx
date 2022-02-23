import { Pokeball } from "components/Pokeball/Pokeball";
import styles from "./Loader.module.css";

export function Loader() {
  return (
    <div className={styles.loader}>
      <p>Loading...</p>
      <div className={styles.spin}>
        <Pokeball />
      </div>
    </div>
  );
}
