import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { fetchPokemons } from "redux/actions/pokemon";

export const usePokemons = () => {
  const dispatch = useDispatch();
  const [pages, setPages] = useState({ next: null, prev: null });
  const [isLoading, setIsLoading] = useState(false);

  const { type } = useParams();

  useEffect(() => {
    const promise = async () => {
      const params = { page: 0, type: type || null };

      const res = await dispatch(fetchPokemons(params));
      const { next, prev } = res;

      setPages({ prev, next });

      setIsLoading(false);
    };

    setIsLoading(true);
    promise();
  }, [dispatch, type]);

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

    prev: handlePrev,
    next: handleNext,
  };
};
