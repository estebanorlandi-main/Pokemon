import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

import { fetchPokemons } from "redux/actions/pokemon";

import PrimaryButton from "components/Buttons/PrimaryButton";
import PokemonList from "components/PokemonList/PokemonList";

import styles from "./Home.module.css";
import { useSearchParams } from "react-router-dom";

const useQuery = () => {
  const [query, setQuery] = useState({});
  const [searchParams] = useSearchParams();

  useEffect(() => {
    for (const entry of searchParams.entries()) {
      const [param, value] = entry;
      setQuery((old) => ({
        ...old,
        [param]: value,
      }));
    }
  }, [searchParams]);

  return query;
};

function Home() {
  const dispatch = useDispatch();
  const query = useQuery();
  console.log(query);

  const { next, prev } = useSelector((state) => state.pokemons);

  useEffect(() => dispatch(fetchPokemons()), [dispatch]);
  const getPage = (page) => dispatch(fetchPokemons(page));

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.pageHandler}>
          <PrimaryButton Icon={BiChevronLeft} onClick={() => getPage(prev)} />
          <PrimaryButton Icon={BiChevronRight} onClick={() => getPage(next)} />
        </div>

        <PokemonList />
      </div>
    </main>
  );
}

export default Home;
