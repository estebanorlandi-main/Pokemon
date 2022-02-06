import { useEffect, useState } from "react";
import { getPokemons } from "../../utils";
import Icons from "../Icons/Icons";

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
      <button onClick={() => get(page.prev)}>Prev</button>
      <button onClick={() => get(page.next)}>Next</button>

      <div className={styles.container}>
        {pokemons.map(({ id, name, types }) => (
          <div
            key={id}
            className={styles.pokemon + ` bg-${types[0]?.type?.name}`}
          >
            <div className={styles.head}>
              <img
                className={styles.pokemon_image}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
              />
            </div>

            <div className={styles.body}>
              <p className={styles.pokemon_name}>{name}</p>
              <ul className={styles.types}>
                {types.map(({ type: { name } }, i) => (
                  <li key={name + i} className={styles.type + " c-" + name}>
                    <Icons imageClass={styles.type_image} type={name} />
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default PokemonList;
