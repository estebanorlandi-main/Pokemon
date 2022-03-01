import PokemonList from "components/PokemonList/PokemonList";
import { useSelector } from "react-redux";

export function HomeDefault() {
  const { pokemons } = useSelector((state) => state.pokemons);

  return <PokemonList pokemons={pokemons} />;
}
