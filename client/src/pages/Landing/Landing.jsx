import { useNavigate } from "react-router";

import { BiRightArrowAlt } from "react-icons/bi";
import { Primary } from "components/Buttons";

import styles from "./Landing.module.css";

function Landing() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/home");
  };

  return (
    <main>
      <section className={styles.main}>
        <div className={styles.header}>
          <h3 className={styles.subtitle}>Catch 'em all!</h3>
          <h1 className={styles.title}>Pokemon</h1>
        </div>

        <Primary onClick={goHome} className={styles.primary}>
          <>
            Home
            <BiRightArrowAlt className={styles.icon} />
          </>
        </Primary>
      </section>
    </main>
  );
}

export default Landing;
