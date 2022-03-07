import PokemonModel from "../models/Pokemon";

import { fetchPokemons } from "./pokeapi";
import { PokeapiPokemon, PokeapiStats, PokeapiType, Pokemon } from "./Types";
import { pokeapi } from "./urls";

const sanitize = (pokemon: PokeapiPokemon) => {
  const sanitized: Pokemon = {
    stats: [],
    types: [],
    id: pokemon.id,
    name: pokemon.name,
    base_experience: pokemon.base_experience,
    height: pokemon.height,
    weight: pokemon.weight,
  };

  pokemon.stats?.map(({ base_stat, stat }: PokeapiStats) =>
    sanitized.stats.push({ base: base_stat, name: stat.name })
  );

  pokemon.types?.map(({ type }: PokeapiType) => {
    sanitized.types.push(type.name);
  });

  return sanitized;
};

export const load_pokemons = async () => {
  console.log("[Server]: Loading Pokemons");
  let currentUrl: string | null = pokeapi.pokemons;

  while (currentUrl) {
    const promise = fetchPokemons(currentUrl);
    const { pokemons, next } = await promise;

    await Promise.all(
      pokemons.map(async (pokemon) => {
        const sanitized = sanitize(pokemon);
        try {
          const newPokemon = new PokemonModel(sanitized);
          await newPokemon.save();
        } catch (e: any) {
          console.log(e);
        }
      })
    );

    currentUrl = next;
  }

  console.log(`[Server]: Pokemons loaded`);
};
