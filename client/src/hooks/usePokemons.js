import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchPokemons, removePokemons } from 'redux/actions/pokemon';

const usePokemons = ({ search, order = 1 }) => {
  const dispatch = useDispatch();
  const [pages, setPages] = useState({ next: null, prev: null });
  const [isLoading, setIsLoading] = useState(false);

  const { type = null, page = 0 } = useParams();

  useEffect(() => {
    if (!type) document.title = `Pokedex | Home`;
    else document.title = `Pokedex | Home ${type}`;

    const promise = async () => {
      const params = {
        page: Number(page),
        type,
        order,
        ...(search ? { search } : {}),
      };

      const res = await dispatch(fetchPokemons(params));
      setIsLoading(false);
      if (!res) return;
      const {
        paginate: { next, prev },
      } = res;
      setPages({ prev, next });
    };

    setIsLoading(true);
    promise();

    return () => {
      dispatch(removePokemons());
    };
  }, [dispatch, type, page, search, order]);

  const handlePrev = async () => {
    if (!pages.prev) return;
    setIsLoading(true);
    const {
      paginate: { next, prev },
    } = await dispatch(fetchPokemons({ page: pages.prev }));
    setIsLoading(false);
    setPages({ next, prev });
  };

  const handleNext = async () => {
    if (!pages.next) return;
    setIsLoading(true);

    const {
      paginate: { next, prev },
    } = await dispatch(fetchPokemons({ page: pages.next }));
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

export default usePokemons;
