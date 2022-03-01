import { useSelector } from "react-redux";

import PokemonCard from "components/PokemonCard/PokemonCard";

import styles from "./PokemonList.module.css";

function PokemonList() {
  const { pokemons } = useSelector((state) => state.pokemons);

  return (
    <div className={styles.container}>
      {pokemons.map(({ id, name, types }) => (
        <PokemonCard key={id} id={id} name={name} types={types} />
      ))}
    </div>
  );
}

export default PokemonList;
