import { useSelector } from "react-redux";
import { StatItem } from "./StatItem";

import styles from "./StatsList.module.css";

export function StatsList({ color }) {
  const { pokemon } = useSelector((state) => state.pokemons);

  if (!pokemon) return <></>;

  const { stats } = pokemon;

  return (
    <ul className={styles.stats}>
      {stats?.length
        ? stats.map((stat) => <StatItem color={color} stat={stat} />)
        : undefined}
    </ul>
  );
}
