import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { fetchPokemons, removePokemons } from "redux/actions/pokemon";

export const usePokemons = (search) => {
  const dispatch = useDispatch();
  const [pages, setPages] = useState({ next: null, prev: null });
  const [isLoading, setIsLoading] = useState(false);

  const { type } = useParams();

  useEffect(() => {
    const promise = async () => {
      const params = { page: 0, type: type || null };
      if (search) params.search = search;
      const res = await dispatch(fetchPokemons(params));
      setIsLoading(false);

      if (!res) return;
      const { next, prev } = res;
      setPages({ prev, next });
    };

    setIsLoading(true);
    promise();

    return () => {
      dispatch(removePokemons());
    };
  }, [dispatch, type, search]);

  const handlePrev = async () => {
    if (!pages.prev) return;
    setIsLoading(true);
    const { next, prev } = await dispatch(fetchPokemons({ page: pages.prev }));
    setIsLoading(false);
    setPages({ next, prev });
  };

  const handleNext = async () => {
    if (!pages.next) return;
    setIsLoading(true);

    const { next, prev } = await dispatch(fetchPokemons({ page: pages.next }));
    setIsLoading(false);
    setPages({ next, prev });
  };

  return {
    isLoading,

    prev: pages.prev ? handlePrev : null,
    next: pages.next ? handleNext : null,
    type,
  };
};
