import { Outlet, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { SearchBar } from "components/SearchBar/SearchBar";

import { Select } from "components/Select/Select";
import { usePokemons } from "hooks/usePokemons";
import { PageHandler } from "components/PageHandler/PageHandler";
import { Loader } from "components/Loader/Loader";

import styles from "./Home.module.css";
import { useState } from "react";

export function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const { page, viewed, total } = useSelector((state) => state.pokemons);

  const { type, prev, next, isLoading } = usePokemons(search);

  const handleType = (type) => {
    if (!type) navigate(`/home`);
    else navigate(`/home/${type}`);
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

        <PageHandler current={page + 1} prev={prev} next={next}>
          {!isLoading ? (
            <>
              <span className={styles.pokemons_number}>
                {viewed} / {total}
              </span>

              <Outlet />
            </>
          ) : (
            <Loader />
          )}
        </PageHandler>
      </div>
    </main>
  );
}
