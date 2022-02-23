import ListTypes from "components/ListTypes/ListTypes";
import Image from "components/Image/Image";

import styles from "./PokemonCard.module.css";
import { Link } from "react-router-dom";
import { getPokemonImage } from "utils";

function PokemonCard({ id, name, types }) {
  const pokemonImg = getPokemonImage(id);
  return (
    <Link className={styles.pokemon} to={`/pokemon/${name}`}>
      <div className={styles.pokemon_container}>
        <div className={`${styles.image_container} c-${types[0]}`}>
          <Image className={styles.pokemon_image} src={pokemonImg} alt={name} />
        </div>

        <div className={styles.pokemon_body}>
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
