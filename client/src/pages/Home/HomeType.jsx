import { Loader } from "components/Loader/Loader";
import PokemonList from "components/PokemonList/PokemonList";
import { usePokemons } from "hooks/usePokemons";

export function HomeType() {
  const { pokemons, isLoading } = usePokemons();

  return !isLoading ? <PokemonList pokemons={pokemons} /> : <Loader />;
}
