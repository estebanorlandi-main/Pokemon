import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

import { fetchPokemons } from "redux/actions/pokemon";

import PrimaryButton from "components/Buttons/PrimaryButton";
import PokemonList from "components/PokemonList/PokemonList";

import styles from "./Home.module.css";

function Home() {
  const dispatch = useDispatch();

  const { next, prev } = useSelector((state) => state.pokemons);

  useEffect(() => dispatch(fetchPokemons()), []);
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
