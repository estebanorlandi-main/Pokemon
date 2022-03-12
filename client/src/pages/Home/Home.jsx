import { useEffect, useState } from 'react';
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';

import { Outlet, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

import usePokemons from 'hooks/usePokemons';

import Select from 'components/Select/Select';
import SearchBar from 'components/SearchBar/SearchBar';
import PageHandler from 'components/PageHandler/PageHandler';
import Loader from 'components/Loader/Loader';
import Secondary from 'components/Buttons/Secondary/Secondary';

import styles from './Home.module.css';

export default function Home() {
  const navigate = useNavigate();

  const [params, setParams] = useState({
    search: '',
    order: 1,
    order2: null,
  });

  const { page } = useSelector((state) => state.pokemons);

  const { type, prev, next, isLoading } = usePokemons(params);

  const handleType = (homeType) => {
    if (!homeType) navigate(`/home`);
    else navigate(`/home/${homeType}`);
  };

  const handleName = (name) => {
    setParams((old) => ({ ...old, search: name }));
  };

  const handleOrder = () => {
    setParams((old) => ({ ...old, order: old.order === -1 ? 1 : -1 }));
  };

  useEffect(() => {
    document.title = `Pokedex | Home`;
  }, []);

  useEffect(() => {
    if (!type) {
      document.title = `Pokedex | Home`;
      return;
    }
    document.title = `Pokedex | Home ${type}`;
  }, [type]);

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.filters}>
          <div className={styles.order_container}>
            <Secondary onClick={handleOrder}>
              0-9{' '}
              {params.order === -1 ? (
                <BiChevronUp size={24} />
              ) : (
                <BiChevronDown size={24} />
              )}
            </Secondary>
          </div>

          <div className={styles.select_container}>
            <Select def={type} onChange={handleType} />
          </div>

          <div className={styles.search_container}>
            <SearchBar onSearch={handleName} />
          </div>
        </div>

        <Loader isLoading={isLoading}>
          <PageHandler current={page + 1} prev={prev} next={next}>
            <Outlet />
          </PageHandler>
        </Loader>
      </div>
    </main>
  );
}
