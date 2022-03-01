import { Outlet, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { SearchBar } from "components/SearchBar/SearchBar";

import { setSearch } from "redux/actions/pokemon";
import { Select } from "components/Select/Select";
import { usePokemons } from "hooks/usePokemons";
import { PageHandler } from "components/PageHandler/PageHandler";
import { Loader } from "components/Loader/Loader";

import styles from "./Home.module.css";

export function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { page, viewed, total } = useSelector((state) => state.pokemons);

  const { prev, next, isLoading } = usePokemons();

  const handleType = (type) => {
    if (!type) navigate(`/home`);
    else navigate(`/home/${type}`);
  };

  const handleName = (name) => {
    dispatch(setSearch(name));
  };

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.filters}>
          <div className={styles.select_container}>
            <Select onChange={handleType} />
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
