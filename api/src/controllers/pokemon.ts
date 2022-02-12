import axios from "axios";
import { Request, Response } from "express";
import PokemonModel from "../models/Pokemon";

import { PokeapiPokemon, PokeapiPokemonResponse } from "../utils/pokeapiTypes";

interface Paginate {
  limit: number;
  offset: number;
}
const fetchPokemons = ({ limit, offset }: Paginate) => {
  return new Promise<PokeapiPokemon[]>((resolve, reject) => {
    axios
      .get<PokeapiPokemonResponse>(
        `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
      )
      .then(({ data }) => {
        const pokemonsPromises = data.results?.map(({ url }) => axios.get(url));
        Promise.all(pokemonsPromises)
          .then((pokemons) => resolve(pokemons.map(({ data }) => data)))
          .catch(reject);
      })
      .catch(reject);
  });
};

export default {
  getPokemons: async function (req: Request, res: Response) {
    try {
      const { type } = req.query;
      const pokemons = await PokemonModel.find();

      if (!pokemons.length) {
        const promise = fetchPokemons({ limit: 30, offset: 0 });
        const pokemons = await promise;

        console.log(pokemons[0]);

        return res.json(pokemons);
      }

      return res.json(pokemons);
    } catch (e: any) {
      res.status(505).json("Error!");
    }
  },
};
