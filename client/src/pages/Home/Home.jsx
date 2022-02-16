import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

import { fetchPokemons, removePokemons } from "redux/actions/pokemon";
//import { useQuery } from "utils";

import PrimaryButton from "components/Buttons/PrimaryButton";
import PokemonList from "components/PokemonList/PokemonList";

import styles from "./Home.module.css";

export function Home() {
  const dispatch = useDispatch();
  //const query = useQuery();

  const [page, setPage] = useState(1);

  useEffect(() => dispatch(fetchPokemons()), [dispatch]);

  const { pokemons, total_pages, prev, next, total } = useSelector(
    (state) => state.pokemons
  );

  const prevPage = () => {
    if (page - 1 <= 0) return;

    setPage(page - 1);
    dispatch(removePokemons());
    dispatch(fetchPokemons(prev));
  };

  const nextPage = () => {
    if (page + 1 > total_pages) return;
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

        {pokemons.length ? (
          <span className={styles.total}>
            {pokemons.length * page} / {total}
          </span>
        ) : null}
        <PokemonList pokemons={pokemons} />
      </div>
    </main>
  );
}
