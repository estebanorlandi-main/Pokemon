import PokemonCard from "components/PokemonCard/PokemonCard";

import styles from "./PokemonList.module.css";
import { useSelector } from "react-redux";
import { Loader } from "components/Loader/Loader";

function PokemonList() {
  const { pokemons } = useSelector((state) => state.pokemons);

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
