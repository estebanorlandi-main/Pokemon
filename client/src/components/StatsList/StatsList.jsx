import { useSelector } from 'react-redux';
import StatItem from './StatItem';

import styles from './StatsList.module.css';

export default function StatsList({ color }) {
  const { pokemon } = useSelector((state) => state.pokemons);

  const { stats } = pokemon;

  return pokemon ? (
    <ul className={styles.stats}>
      {stats?.length
        ? stats.map((stat) => <StatItem color={color} stat={stat} />)
        : undefined}
    </ul>
  ) : undefined;
}
