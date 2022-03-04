import ListTypes from 'components/ListTypes/ListTypes';
import Image from 'components/Image';

import { Link } from 'react-router-dom';
import { getPokemonImage } from 'utils';
import { useEffect, useRef } from 'react';

import styles from './PokemonCard.module.css';

function PokemonCard({ id, name, types }) {
  const pokemonImg = getPokemonImage(id);

  const ref = useRef(null);

  const onImageLoad = () => {
    ref.current.style.transform = `translate(0, 0)`;
    ref.current.style.opacity = `1`;
  };

  useEffect(() => {
    const y = Math.floor(Math.random() * 100);
    let x = Math.floor(Math.random() * 200);
    x *= Math.round(Math.random()) ? 1 : -1;
    ref.current.style.transform = `translate(${x}%, ${y}%)`;
    ref.current.style.opacity = `0`;
  }, [ref]);

  return (
    <Link ref={ref} className={styles.pokemon} to={`/pokemon/${name}`}>
      <div className={styles.pokemon_container}>
        <div className={`${styles.image_container} c-${types[0]}`}>
          <Image
            className={styles.pokemon_image}
            onLoad={onImageLoad}
            src={pokemonImg}
            alt={name}
            width="400"
            height="400"
          />
        </div>

        <div className={styles.pokemon_body}>
          <h3 className={styles.pokemon_name}>{name}</h3>
          <ul className={styles.pokemon_types}>
            <ListTypes className={styles.type} types={types} />
          </ul>
        </div>
      </div>
    </Link>
  );
}

export default PokemonCard;
