import { useEffect } from "react";
import { BiChevronLeft, BiHeart, BiShield } from "react-icons/bi";
import { RiSwordFill } from "react-icons/ri";
import { MdSpeed } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";

import { fetchDetails, removeDetails } from "redux/actions/pokemon";
import { getIconComponent, getPokemonImage } from "utils";
import Image from "components/Image/Image";

import styles from "./Pokemon.module.css";

const iconSize = 24;
const stats = {
  hp: <BiHeart size={iconSize} className={styles.stat_icon} />,
  defense: <BiShield size={iconSize} className={styles.stat_icon} />,
  attack: <RiSwordFill size={iconSize} className={styles.stat_icon} />,
  "special-attack": "SpA",
  "special-defense": "SpD",
  speed: <MdSpeed size={iconSize} className={styles.stat_icon} />,
};

const Pokemon = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { pokemon } = useSelector((state) => state.pokemons);

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    dispatch(fetchDetails(id));
    return () => dispatch(removeDetails());
  }, [dispatch, id]);

  const handlePage = () => navigate(-1);

  return (
    <div className={styles.container}>
      <header className={styles.top_bar}>
        <button onClick={handlePage} className={styles.back_btn}>
          <BiChevronLeft size={iconSize} /> <span>back</span>
        </button>
        <h3 className={styles.pokemon_id}>#{pokemon?.id}</h3>
      </header>

      <main className={styles.main}>
        <figure className={styles.image_container}>
          {pokemon?.name ? (
            <Image
              className={styles.pokemon_image}
              src={getPokemonImage(pokemon?.id)}
              alt=""
            />
          ) : null}
          <figcaption></figcaption>
        </figure>

        <div className={styles.body}>
          <ul className={styles.pokemon_types}>
            {pokemon?.types
              ? pokemon.types.map((type, i) => {
                  const Icon = getIconComponent(type);
                  return (
                    <li key={type + i}>
                      <Link
                        className={styles.pokemon_type}
                        to={`/home/${type}`}
                      >
                        <Icon className={styles.pokemon_type_icon} />
                        {type}
                      </Link>
                    </li>
                  );
                })
              : undefined}
          </ul>

          <h1 className={styles.pokemon_name}>{pokemon?.name}</h1>

          <div className={styles.body_content}>
            <section>
              <h3 className={styles.section_name}>Info</h3>
              <ul className={styles.info_list}>
                <li className={styles.info_item}>
                  <div className={styles.info_name}>Height</div>
                  <span className={styles.info_value}>{pokemon?.height}</span>
                </li>
                <li className={styles.info_item}>
                  <div className={styles.info_name}>Weight</div>
                  <span className={styles.info_value}>{pokemon?.weight}</span>
                </li>
                <li className={styles.info_item}>
                  <div className={styles.info_name}>Base Exp</div>
                  <span className={styles.info_value}>
                    {pokemon?.base_experience}
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className={styles.section_name}>Stats</h3>
              <ul className={styles.stats_list}>
                {pokemon?.stats?.length
                  ? pokemon.stats.map(({ name, base }, i) => (
                      <li
                        className={styles.stat_item + ` c-${pokemon?.types[0]}`}
                        key={name + base + i}
                      >
                        <div className={styles.stat_name}>{stats[name]}</div>
                        <span className={styles.stat_value}>{base}</span>
                      </li>
                    ))
                  : undefined}
              </ul>
            </section>

            <section>
              <h3>Abilities</h3>
              <p>Under construction!</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pokemon;
