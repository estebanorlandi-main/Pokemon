import { useEffect, useState } from "react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

import { getPokemons } from "../../utils";

import PrimaryButton from "../Buttons/PrimaryButton";
import Icons from "../Icons/Icons";
import Image from "../Image/Image";

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

  const types = Array.from(
    new Set(pokemons.map(({ types }) => types[0].type.name))
  );

  return (
    <>
      <div className={styles.pageHandler}>
        <PrimaryButton Icon={BiChevronLeft} onClick={() => get(page.prev)} />
        <PrimaryButton Icon={BiChevronRight} onClick={() => get(page.next)} />
      </div>

      <div className={styles.container}>
        {pokemons.map(({ id, name, types }) => (
          <div
            key={id}
            className={styles.pokemon + ` bg-${types[0]?.type?.name}`}
          >
            <div className={styles.head}>
              <Image
                className={styles.pokemon_image}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                animationClass={styles.anim}
              />
            </div>

            <div className={styles.body}>
              <p className={styles.pokemon_name}>{name}</p>
              <ul className={styles.types}>
                {types.map(({ type: { name } }, i) => (
                  <li key={name + i} className={styles.type + " bg-" + name}>
                    <Icons imageClass={styles.type_image} type={name} />
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
