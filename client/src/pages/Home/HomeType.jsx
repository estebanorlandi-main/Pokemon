import PokemonList from "components/PokemonList/PokemonList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchPokemons, removePokemons } from "redux/actions/pokemon";

export function HomeType() {
  const dispatch = useDispatch();

  const params = useParams();
  const { type } = params;

  const { pokemons } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(fetchPokemons(0, type));
    return () => dispatch(removePokemons());
  }, [dispatch, type]);

  

  return (
    <div>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}
