import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const useQuery = () => {
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState({});
  const [searchParams] = useSearchParams();

  useEffect(() => {
    Object.entries(searchParams).forEach((entry) => {
      const [param, value] = entry;
      setQuery(
        (old) => ({
          ...old,
          [param]: value,
        }),
        () => setLoading((old) => !old),
      );
    });
  }, [searchParams]);

  return { loadingQuery: loading, query };
};

export default useQuery;
