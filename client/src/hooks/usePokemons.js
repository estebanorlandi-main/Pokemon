import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchPokemons, removePokemons } from "redux/actions/pokemon";

export const usePokemons = () => {
  const dispatch = useDispatch();
  const { type } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const { pokemons, next, prev } = useSelector((state) => state.pokemons);

  useEffect(() => {
    const p = async () => {
      if (type) await dispatch(fetchPokemons({ page: 0, type }));
      else await dispatch(fetchPokemons({ page: 0 }));
      setIsLoading(false);
    };

    if (isLoading) return;
    setIsLoading(true);
    p();

    return () => dispatch(removePokemons());
  }, [dispatch, type]);

  const handlePrev = async () => {
    if (!prev) return;
    setIsLoading(true);
    if (type) await dispatch(fetchPokemons({ page: prev, type }));
    else await dispatch(fetchPokemons({ page: prev }));
    setIsLoading(false);
  };

  const handleNext = async () => {
    if (!next) return;
    setIsLoading(true);
    if (type) return await dispatch(fetchPokemons({ page: next, type }));
    else await dispatch(fetchPokemons({ page: next }));
    setIsLoading(false);
  };

  return {
    pokemons,
    prev: prev ? handlePrev : null,
    next: next ? handleNext : null,
    isLoading,
  };
};
