import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useQuery = () => {
  const [query, setQuery] = useState({});
  const [searchParams] = useSearchParams();

  useEffect(() => {
    for (const entry of searchParams.entries()) {
      const [param, value] = entry;
      setQuery((old) => ({
        ...old,
        [param]: value,
      }));
    }
  }, [searchParams]);

  return query;
};
