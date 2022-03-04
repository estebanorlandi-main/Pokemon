import { Pokeball } from 'components/Pokeball/Pokeball';
import styles from './Loader.module.css';

export default function Loader({ children, isLoading }) {
  if (isLoading)
    return (
      <div className={styles.loader}>
        <p>Loading...</p>
        <div className={styles.spin}>
          <Pokeball />
        </div>
      </div>
    );

  return children;
}
