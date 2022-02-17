import PokemonModel from "../models/Pokemon";

import { fetchPokemons } from "./pokeapi";
import { PokeapiStats, PokeapiType } from "./pokeapiTypes";
import { Pokemon } from "./pokemonTypes";
import { pokeapi } from "./urls";

const save_pokemon = async (pokemon: Pokemon) => {
  const new_pokemon = new PokemonModel({
    id: pokemon.id,
    name: pokemon.name,
    types: pokemon.types,
    stats: pokemon.stats,
  });

  await new_pokemon.save();
};

export const load_pokemons = async () => {
  console.log("[Server]: Loading Pokemons");
  let currentUrl: string | null = pokeapi.pokemons;
  while (currentUrl) {
    const promise = fetchPokemons(currentUrl);
    const { pokemons, next } = await promise;

    await Promise.all(
      pokemons.map(async (pokemon) => {
        const sanitized: Pokemon = {
          stats: [],
          types: [],
          id: pokemon.id,
          name: pokemon.name,
        };

        pokemon.stats?.map(({ base_stat, stat }: PokeapiStats) =>
          sanitized.stats.push({ base: base_stat, name: stat.name })
        );

        pokemon.types?.map(({ type }: PokeapiType) => {
          sanitized.types.push(type.name);
        });

        save_pokemon(sanitized);
      })
    );

    currentUrl = next;
  }
  console.log("[Server]: Pokemons Loaded: " + (await PokemonModel.count()));
};
