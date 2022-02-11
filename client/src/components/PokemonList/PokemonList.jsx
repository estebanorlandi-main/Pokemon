import PokemonCard from "components/PokemonCard/PokemonCard";

import { Loader } from "components/Loader/Loader";

import styles from "./PokemonList.module.css";

function PokemonList({ pokemons }) {
  return (
    <>
      {pokemons.length ? (
        <div className={styles.container}>
          {pokemons.map(({ id, name, types }) => (
            <PokemonCard key={id} id={id} name={name} types={types} />
          ))}
        </div>
      ) : (
        <div className={styles.center}>
          <Loader />
        </div>
      )}
    </>
  );
}

export default PokemonList;
