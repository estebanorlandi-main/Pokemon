import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";

import styles from "./Landing.module.css";

function Landing() {
  return (
    <main>
      <section className={styles.main}>
        <div className={styles.header}>
          <h3 className={styles.subtitle}>Catch 'em all!</h3>
          <h1 className={styles.title}>Pokemon</h1>
        </div>

        <Link to="/home" className={styles.toHome}>
          Home
          <BiRightArrowAlt className={styles.icon} />
        </Link>
      </section>
    </main>
  );
}

export default Landing;
