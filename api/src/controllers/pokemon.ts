import { Request, Response } from "express";
import PokemonModel from "../models/Pokemon";

export default {
  getPokemons: async function (req: Request, res: Response) {
    try {
      const { type } = req.query;
      const pokemons = await PokemonModel.find(type ? { types: type } : {});

      return res.json({ results: pokemons, count: pokemons.length });
    } catch (e: any) {
      res.status(505).json("Error!");
    }
  },
};
