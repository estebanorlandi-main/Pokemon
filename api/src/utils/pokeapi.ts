import axios from "axios";
import { PokeapiPokemon, PokeapiPokemonResponse } from "./Types";

interface Resolve {
  pokemons: PokeapiPokemon[];
  next: string | null;
  prev: string | null;
  count: number;
}

interface PokemonAxios {
  name: string;
  url: string;
}

const getPokemonDetails = async (results: PokemonAxios[]) => {
  const promises = results?.map(({ url }) => axios.get(url));
  return await Promise.all(promises).then((pokemons) =>
    pokemons.map(({ data }) => data)
  );
};

const handle_response = async (data: PokeapiPokemonResponse) => {
  const { next, previous, count, results } = data;
  return {
    pokemons: await getPokemonDetails(results),
    next,
    prev: previous,
    count,
  };
};

export const fetchPokemons = (page: string) => {
  return new Promise<Resolve>((resolve, reject) => {
    axios
      .get<PokeapiPokemonResponse>(page)
      .then(async ({ data }) => {
        const resolveWith = await handle_response(data);
        resolve(resolveWith);
      })
      .catch(reject);
  });
};
