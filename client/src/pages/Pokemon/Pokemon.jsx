import { useEffect, useState } from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { fetchDetails, removeDetails } from 'redux/actions/pokemon';
import { getPokemonImage } from 'utils';

import StatsList from 'components/StatsList/StatsList';
import Image from 'components/Image';
import ListTypes from 'components/ListTypes/ListTypes';
import Loader from 'components/Loader/Loader';

import styles from './Pokemon.module.css';
import { MdSignalWifiConnectedNoInternet0 } from 'react-icons/md';

function Pokemon() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [color, setColor] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  const { pokemon } = useSelector((state) => state.pokemons);

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    dispatch(fetchDetails(id));
    return () => dispatch(removeDetails());
  }, [dispatch, id]);

  useEffect(() => {
    if (pokemon?.name) {
      setColor(pokemon.types[0]);
    }
  }, [pokemon]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handlePage = () => navigate(-1);
  const handleClick = (type) => navigate(`/home/${type}`);

  return (
    <Loader isLoading={!pokemon}>
      <div className={styles.container}>
        <header className={styles.top_bar}>
          <button
            type="button"
            onClick={handlePage}
            className={styles.back_btn}
          >
            <BiChevronLeft size={24} /> <span>back</span>
          </button>
          <h3 className={styles.pokemon_id}>#{pokemon?.id}</h3>
        </header>

        <main className={styles.main}>
          <div
            className={`${styles.image_container} ${
              isLoaded ? styles.image_enter : ''
            }`}
          >
            <div>
              {pokemon?.name ? (
                <Image
                  onLoad={handleLoad}
                  className={styles.pokemon_image}
                  src={getPokemonImage(pokemon?.id)}
                  alt=""
                />
              ) : null}
              <div className={`${styles.decoration} c-${color}`} />
            </div>
          </div>

          <div className={styles.body}>
            <ul className={styles.pokemon_types}>
              {pokemon?.types ? (
                <ListTypes
                  onClick={handleClick}
                  className={styles.pokemon_type}
                  types={pokemon.types}
                  withText
                />
              ) : undefined}
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
                <StatsList color={color} />
              </section>
            </div>
          </div>
        </main>
      </div>
    </Loader>
  );
}

export default Pokemon;
