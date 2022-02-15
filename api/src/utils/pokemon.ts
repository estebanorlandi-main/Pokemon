import PokemonModel from "../models/Pokemon";

import { fetchPokemons } from "./Pokeapi";
import { PokeapiStats, PokeapiType } from "./pokeapiTypes";
import { Pokemon } from "./pokemonTypes";

const save_pokemon = (pokemon: Pokemon) => {
  const new_pokemon = new PokemonModel({
    name: pokemon.name,
    types: pokemon.types,
    stats: pokemon.stats,
  });

  new_pokemon.save();
};

export const load_pokemons = async () => {
  let currentUrl: string | null = "https://pokeapi.co/api/v2/pokemon/";

  while (currentUrl) {
    const promise = fetchPokemons(currentUrl);
    const { pokemons, next } = await promise;

    pokemons.map((pokemon) => {
      const sanitized: Pokemon = {
        stats: [],
        types: [],
        name: pokemon.name,
      };

      pokemon.stats?.map(({ base_stat, stat }: PokeapiStats) =>
        sanitized.stats.push({ base: base_stat, name: stat.name })
      );

      pokemon.types?.map(({ type }: PokeapiType) => {
        sanitized.types.push(type.name);
      });

      save_pokemon(sanitized);
    });

    currentUrl = next;
  }
};
