import { NavLink, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const handleClass = ({ isActive, isBrand }) => `
  ${styles.link}
  ${isBrand ? styles.brand : ''}
  ${isActive ? styles.active : ''}
`;

function Navbar() {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <header className={`${styles.navbar} ${isLanding ? styles.landing : ''}`}>
      <nav className={styles.container}>
        <NavLink
          to="/"
          className={({ isActive }) => handleClass({ isActive, isBrand: true })}
        >
          Pokedex
        </NavLink>
        <ul className={styles.menu}>
          <li>
            <NavLink to="/home" className={handleClass}>
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
