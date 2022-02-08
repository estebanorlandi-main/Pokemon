import Image from "../Image/Image";
import ListTypes from "../ListTypes/ListTypes";

import styles from "./PokemonCard.module.css";

function PokemonCard({ id, name, types }) {
  return (
    <div className={styles.pokemon + ` bg-${types[0]?.type?.name}`}>
      <Image
        className={styles.pokemon_image}
        animationClass={styles.anim}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
      />

      <div className={styles.body}>
        <h3 className={styles.pokemon_name}>{name}</h3>
        <ul className={styles.pokemon_types}>
          <ListTypes types={types} />
        </ul>
      </div>
    </div>
  );
}

export default PokemonCard;
