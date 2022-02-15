import axios from "axios";
import { PokeapiPokemon, PokeapiPokemonResponse } from "./pokeapiTypes";

interface Resolve {
  pokemons: PokeapiPokemon[];
  next: string | null;
  prev: string | null;
  count: number;
}

export const fetchPokemons = (page: string) => {
  return new Promise<Resolve>((resolve, reject) => {
    axios
      .get<PokeapiPokemonResponse>(page)
      .then(({ data }) => {
        const pokemonsPromises = data.results?.map(({ url }) => axios.get(url));
        Promise.all(pokemonsPromises)
          .then((pokemons) => {
            const res = {
              pokemons: pokemons.map(({ data }) => data),
              next: data.next,
              prev: data.previous,
              count: data.count,
            };
            resolve(res);
          })
          .catch(reject);
      })
      .catch(reject);
  });
};
