import PokemonList from "components/PokemonList/PokemonList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons, removePokemons } from "redux/actions/pokemon";

export function HomeDefault() {
  const dispatch = useDispatch();

  const { pokemons, next, prev } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(fetchPokemons(0));
    return () => dispatch(removePokemons());
  }, [dispatch]);

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
    <div>
      <button onClick={prevPage}>Previous</button>
      <button onClick={nextPage}>Next</button>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}
