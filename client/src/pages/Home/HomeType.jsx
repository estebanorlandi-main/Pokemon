import PokemonList from "components/PokemonList/PokemonList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchPokemons, removePokemons } from "redux/actions/pokemon";

export function HomeType() {
  const dispatch = useDispatch();

  const params = useParams();
  const { type } = params;

  const { pokemons, next, prev } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(fetchPokemons(0, type));
    return () => dispatch(removePokemons());
  }, [dispatch, type]);

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
