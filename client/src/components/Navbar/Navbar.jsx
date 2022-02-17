import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.brand}>
          Pokedex
        </Link>

        <ul className={styles.menu}>
          <li className={styles.menu_item}>
            <Link to="/home" className={styles.menu_link}>
              Home
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
