import ListTypes from "components/ListTypes/ListTypes";
import Image from "components/Image/Image";

import styles from "./PokemonCard.module.css";
import { Link } from "react-router-dom";
import { getPokemonImage } from "utils";

function PokemonCard({ id, name, types }) {
  const pokemonImg = getPokemonImage(id);
  return (
    <Link className={styles.pokemon_link} to={`/pokemon/${id}`}>
      <div className={`${styles.pokemon} bg-${types[0]}`}>
        <Image className={styles.pokemon_image} src={pokemonImg} alt={name} />

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
