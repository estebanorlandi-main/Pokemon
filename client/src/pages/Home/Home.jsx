import { useState } from 'react';

import { Outlet, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

import usePokemons from 'hooks/usePokemons';

import { SearchBar } from 'components/SearchBar/SearchBar';
import { Select } from 'components/Select/Select';
import { PageHandler } from 'components/PageHandler/PageHandler';
import { Loader } from 'components/Loader/Loader';

import styles from './Home.module.css';

export default function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const { page, pokemons } = useSelector((state) => state.pokemons);

  const { type, prev, next, isLoading } = usePokemons(search);

  const handleType = (homeType) => {
    if (!homeType) navigate(`/home`);
    else navigate(`/home/${homeType}`);
  };

  const handleName = (name) => {
    setSearch(name);
  };

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.filters}>
          <div className={styles.select_container}>
            <Select def={type} onChange={handleType} />
          </div>

          <div className={styles.search_container}>
            <SearchBar onSearch={handleName} />
          </div>
        </div>

        {!isLoading ? (
          pokemons?.length ? (
            <PageHandler current={page + 1} prev={prev} next={next}>
              <Outlet />
            </PageHandler>
          ) : (
            <></>
          )
        ) : (
          <Loader />
        )}
      </div>
    </main>
  );
}
