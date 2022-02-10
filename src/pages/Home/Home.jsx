import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

import { fetchPokemons, removePokemons } from "redux/actions/pokemon";

import PrimaryButton from "components/Buttons/PrimaryButton";
import PokemonList from "components/PokemonList/PokemonList";
//import { useQuery } from "utils/hooks";

import styles from "./Home.module.css";

export function Home() {
  const dispatch = useDispatch();
  //const query = useQuery();

  useEffect(() => dispatch(fetchPokemons()), [dispatch]);

  const { prev, next } = useSelector((state) => state.pokemons);
  const prevPage = () => {
    dispatch(removePokemons());
    dispatch(fetchPokemons(prev));
  };
  const nextPage = () => {
    dispatch(removePokemons());
    dispatch(fetchPokemons(next));
  };

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.pageHandler}>
          {prev ? (
            <PrimaryButton Icon={BiChevronLeft} onClick={prevPage} />
          ) : null}
          {next ? (
            <PrimaryButton Icon={BiChevronRight} onClick={nextPage} />
          ) : null}
        </div>

        <PokemonList />
      </div>
    </main>
  );
}
