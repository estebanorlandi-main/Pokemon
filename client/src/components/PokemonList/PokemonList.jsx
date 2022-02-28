import PokemonCard from "components/PokemonCard/PokemonCard";

import { Loader } from "components/Loader/Loader";

import styles from "./PokemonList.module.css";

function PokemonList({ pokemons }) {
  return (
    <div className={styles.container}>
      {pokemons.map(({ id, name, types }) => (
        <PokemonCard key={id} id={id} name={name} types={types} />
      ))}
    </div>
  );
}

export default PokemonList;
