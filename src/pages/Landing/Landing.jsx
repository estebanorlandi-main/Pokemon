import ListTypes from "components/ListTypes/ListTypes";
import { typesArray } from "utils";

import styles from "./Landing.module.css";

function Landing() {
  return (
    <main>
      <div className={styles.container}>
        <h1 className={styles.title}>Select your pokemon type</h1>
        <ul className={styles.types}>
          <ListTypes types={typesArray} size={1.5} className={styles.type} />
        </ul>
      </div>
    </main>
  );
}

export default Landing;
