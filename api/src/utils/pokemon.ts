import PokemonModel from "../models/Pokemon";

import { fetchPokemons } from "./pokeapi";
import { PokeapiStats, PokeapiType } from "./pokeapiTypes";
import { Pokemon } from "./pokemonTypes";
import { pokeapi } from "./urls";

interface GetAll {
  find: object;
  skip: number;
  limit: number;
  options: object;
}

export const getAll = async ({ find, options, skip, limit }: GetAll) => {
  return await PokemonModel.find(find, options).skip(skip).limit(limit);
};

const save_pokemon = async (pokemon: Pokemon) => {
  const new_pokemon = new PokemonModel({
    id: pokemon.id,
    name: pokemon.name,
    types: pokemon.types,
    stats: pokemon.stats,
    height: pokemon.height,
    base_experience: pokemon.base_experience,
    weight: pokemon.weight,
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

        save_pokemon(sanitized);
      })
    );

    currentUrl = next;
  }
  console.log("[Server]: Pokemons Loaded: " + (await PokemonModel.count()));
};
