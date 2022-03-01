import ListTypes from "components/ListTypes/ListTypes";
import Image from "components/Image/Image";

import styles from "./PokemonCard.module.css";
import { Link } from "react-router-dom";
import { getPokemonImage } from "utils";
import { useEffect, useRef, useState } from "react";

function PokemonCard({ id, name, types }) {
  const pokemonImg = getPokemonImage(id);
  const [show, setShow] = useState(false);

  const ref = useRef(null);

  const onImageLoad = ({ success }) => {
    if (success) {
    }

    if (!success) {
    }

    ref.current.style.transform = `translate(0, 0)`;
    setShow(true);
  };

  useEffect(() => {
    const y = Math.floor(Math.random() * 100);
    const x =
      Math.random() > 0.5
        ? Math.floor(Math.random() *  100)
        : -Math.floor(Math.random() * 100);
    ref.current.style.transform = `translate(${x}%, ${y}%)`;
  }, [ref]);

  return (
    <Link
      ref={ref}
      className={`${styles.pokemon} ${show ? styles.show : ""}`}
      to={`/pokemon/${name}`}
    >
      <div className={styles.pokemon_container}>
        <div className={`${styles.image_container} c-${types[0]}`}>
          <Image
            className={styles.pokemon_image}
            onLoad={onImageLoad}
            src={pokemonImg}
            alt={name}
          />
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
