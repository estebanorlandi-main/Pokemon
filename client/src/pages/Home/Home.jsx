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
        <Outlet />
      </div>
    </main>
  );
}
