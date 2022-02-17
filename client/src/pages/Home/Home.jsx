import styles from "./Home.module.css";
import { Outlet } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removePokemons } from "redux/actions/pokemon";

export function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(removePokemons());
  }, [dispatch]);

  return (
    <main>
      <div className={styles.container}>
        {/*<div className={styles.pageHandler}>
          <PrimaryButton Icon={BiChevronLeft} onClick={prevPage} />
          {page}
          <PrimaryButton Icon={BiChevronRight} onClick={nextPage} />
        </div>*/}

        <Outlet />
      </div>
    </main>
  );
}
