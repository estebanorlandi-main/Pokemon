import ListTypes from "components/ListTypes/ListTypes";
import Image from "components/Image/Image";

import styles from "./PokemonCard.module.css";
import { Link } from "react-router-dom";

function PokemonCard({ id, name, types }) {
  return (
    <Link to={`/pokemon/${id}`}>
      <div className={`${styles.pokemon} bg-${types[0]?.type?.name}`}>
        <Image
          className={styles.pokemon_image}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt={name}
        />

        <div className={styles.body}>
          <h3 className={styles.pokemon_name}>{name}</h3>
          <ul className={styles.pokemon_types}>
            <ListTypes types={types} />
          </ul>
        </div>
      </div>
    </Link>
  );
}

export default PokemonCard;
