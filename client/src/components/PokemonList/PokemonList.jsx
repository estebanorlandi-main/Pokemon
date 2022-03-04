import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

import PokemonCard from 'components/PokemonCard/PokemonCard';

import styles from './PokemonList.module.css';

function PokemonList() {
  const { pokemons, viewed, total } = useSelector((state) => state.pokemons);
  const { type } = useParams();

  return (
    <>
      <div className={styles.inline}>
        <h1 className={styles.title}>Home {type}</h1>
        <span className={styles.pokemons_number}>
          {viewed} / {total}
        </span>
      </div>
      <div className={styles.container}>
        {pokemons.map(({ id, name, types }) => (
          <PokemonCard key={id} id={id} name={name} types={types} />
        ))}
      </div>
    </>
  );
}

export default PokemonList;
