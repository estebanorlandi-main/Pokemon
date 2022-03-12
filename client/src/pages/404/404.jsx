import Pokeball from 'components/Pokeball/Pokeball';
import { useEffect } from 'react';
import styles from './404.module.css';

export default function Error404() {
  useEffect(() => {
    document.title = 'Pokedex | 404 page not found';
  }, []);
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
