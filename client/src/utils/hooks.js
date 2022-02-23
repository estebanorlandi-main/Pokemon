import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useQuery = () => {
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState({});
  const [searchParams] = useSearchParams();

  useEffect(() => {
    for (const entry of searchParams.entries()) {
      const [param, value] = entry;
      setQuery(
        (old) => ({
          ...old,
          [param]: value,
        }),
        () => setLoading((old) => !old)
      );
    }
  }, [searchParams]);

  return { loadingQuery: loading, query };
};
