import PokemonList from "components/PokemonList/PokemonList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons, removePokemons } from "redux/actions/pokemon";

export function HomeDefault() {
  const dispatch = useDispatch();

  const { pokemons } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(fetchPokemons(0));
    return () => dispatch(removePokemons());
  }, [dispatch]);

  return <PokemonList pokemons={pokemons} />;
}
