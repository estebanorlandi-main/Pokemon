import { useSelector } from "react-redux";

import PokemonCard from "components/PokemonCard/PokemonCard";

import styles from "./PokemonList.module.css";

function PokemonList() {
  const { pokemons, viewed, total } = useSelector((state) => state.pokemons);

  return (
    <>
      <span className={styles.pokemons_number}>
        {viewed} / {total}
      </span>
      <div className={styles.container}>
        {pokemons.map(({ id, name, types }) => (
          <PokemonCard key={id} id={id} name={name} types={types} />
        ))}
      </div>
    </>
  );
}

export default PokemonList;
