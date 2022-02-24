import { Outlet, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { SearchBar } from "components/SearchBar/SearchBar";

import PageButton from "components/Buttons/PrimaryButton";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import styles from "./Home.module.css";
import {
  fetchPokemons,
  removePokemons,
  setSearch,
  setType,
} from "redux/actions/pokemon";
import { Select } from "components/Select/Select";

export function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { next, page, prev } = useSelector((state) => state.pokemons);

  const nextPage = () => {
    if (!next) return;
    dispatch(removePokemons());
    dispatch(fetchPokemons({ page: next }));
  };

  const prevPage = () => {
    if (!prev) return;
    dispatch(removePokemons());
    dispatch(fetchPokemons({ page: prev }));
  };

  const handleType = (type) => {
    if (!type) return navigate(`/home`);
    dispatch(setType(type));
    navigate(`/home/${type}`);
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

        <div className={styles.pageButtons}>
          <PageButton onClick={prevPage} Icon={BiChevronLeft} />
          <span className={styles.pageNumber}>{page + 1}</span>
          <PageButton onClick={nextPage} Icon={BiChevronRight} />
        </div>

        <Outlet />

        <div className={styles.pageButtons}>
          <PageButton onClick={prevPage} Icon={BiChevronLeft} />
          <span className={styles.pageNumber}>{page + 1}</span>
          <PageButton onClick={nextPage} Icon={BiChevronRight} />
        </div>
      </div>
    </main>
  );
}
