import { useEffect, useState } from "react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

import { getPokemons } from "../../utils";

import PrimaryButton from "../Buttons/PrimaryButton";
import PokemonCard from "../PokemonCard/PokemonCard";

import styles from "./PokemonList.module.css";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState({
    next: "",
    prev: "",
  });

  const get = (page) =>
    getPokemons(page).then((res) => {
      setPokemons(res.results.map(({ data }) => data));
      setPage({ next: res.next, prev: res.prev });
    });

  useEffect(() => {
    get();
  }, []);

  return (
    <>
      <div className={styles.pageHandler}>
        <PrimaryButton Icon={BiChevronLeft} onClick={() => get(page.prev)} />
        <PrimaryButton Icon={BiChevronRight} onClick={() => get(page.next)} />
      </div>

      <div className={styles.container}>
        {pokemons.map(({ id, name, types }) => (
          <PokemonCard key={id} id={id} name={name} types={types} />
        ))}
      </div>
    </>
  );
}

export default PokemonList;
