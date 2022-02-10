import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

import { fetchPokemons, removePokemons } from "redux/actions/pokemon";

import PrimaryButton from "components/Buttons/PrimaryButton";
import PokemonList from "components/PokemonList/PokemonList";

import styles from "./Home.module.css";

export function Home() {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  useEffect(() => dispatch(fetchPokemons()), [dispatch]);

  const { prev, next } = useSelector((state) => state.pokemons);
  const prevPage = () => {
    setPage(page - 1);
    dispatch(removePokemons());
    dispatch(fetchPokemons(prev));
  };
  const nextPage = () => {
    setPage(page + 1);
    dispatch(removePokemons());
    dispatch(fetchPokemons(next));
  };

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.pageHandler}>
          <PrimaryButton Icon={BiChevronLeft} onClick={prevPage} />
          {page}
          <PrimaryButton Icon={BiChevronRight} onClick={nextPage} />
        </div>

        <PokemonList />
      </div>
    </main>
  );
}
