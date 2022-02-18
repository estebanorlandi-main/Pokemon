import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchDetails, removeDetails } from "redux/actions/pokemon";
import { getIconComponent, getPokemonImage } from "utils";

import styles from "./Pokemon.module.css";

const Pokemon = () => {
  const dispatch = useDispatch();
  const { pokemon } = useSelector((state) => state.pokemons);

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    dispatch(fetchDetails(id));
    return () => dispatch(removeDetails());
  }, [dispatch, id]);

  let Icon = null;
  let bg = null;
  if (pokemon?.types) Icon = getIconComponent(pokemon?.types[0]?.type?.name);
  if (pokemon?.types) bg = pokemon?.types[0];

  return (
    <main>
      <div className={styles.container + ` bg-${bg}`}>
        <div className={styles.inline}>
          <div className={styles.pokemon_info}>
            <div className={styles.pokemon_data}>
              <span className={styles.pokemon_id}>#{pokemon?.id}</span>
              <h1 className={styles.pokemon_name}>
                {pokemon?.name}
                {Icon ? <Icon fill="light" className={styles.icon} /> : null}
              </h1>
            </div>

            <div className={styles.pokemon_stats}>
              <p className={styles.pokemon_height}>
                <span className={styles.bold}>Height - </span>
                {pokemon?.height}
              </p>
              <p className={styles.pokemon_weight}>
                <span className={styles.bold}>Weight - </span>
                {pokemon?.weight}
              </p>
              <p className={styles.pokemon_hp}>
                <span className={styles.bold}>
                  {pokemon?.id && pokemon?.stats[0]?.stat?.name} -
                </span>
                {pokemon?.id && pokemon?.stats[0]?.base_stat}
              </p>
            </div>
          </div>

          {pokemon?.name ? (
            <img
              className={styles.pokemon_image}
              src={getPokemonImage(pokemon?.id)}
              alt=""
            />
          ) : null}
        </div>
      </div>
    </main>
  );
};

export default Pokemon;
