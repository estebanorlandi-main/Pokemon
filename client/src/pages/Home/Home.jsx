import { Outlet, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchBar } from "components/SearchBar/SearchBar";

import PageButton from "components/Buttons/PrimaryButton";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import styles from "./Home.module.css";
import { fetchPokemons, removePokemons } from "redux/actions/pokemon";
import { Select } from "components/Select/Select";

export function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { next, page, prev } = useSelector((state) => state.pokemons);

  const [type, setType] = useState("");

  useEffect(() => {
    if (type) navigate(`/home/${type}`);
    else navigate("/home");
  }, [type]);

  const nextPage = () => {
    if (!next) return;
    dispatch(removePokemons());
    dispatch(fetchPokemons(next));
  };

  const prevPage = () => {
    if (!prev) return;
    dispatch(removePokemons());
    dispatch(fetchPokemons(prev));
  };

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.filters}>
          <div className={styles.select_container}>
            <Select onChange={(type) => setType(type)} />
          </div>

          <div className={styles.pageButtons}>
            <PageButton onClick={prevPage} Icon={BiChevronLeft} />
            <span className={styles.pageNumber}>{page + 1}</span>
            <PageButton onClick={nextPage} Icon={BiChevronRight} />
          </div>

          <SearchBar />
        </div>
        <Outlet />
      </div>
    </main>
  );
}
