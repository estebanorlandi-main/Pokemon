import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import PokemonModel from "../models/Pokemon";

const options = {
  perPage: 20,
};

const paginate = (page: number) => ({
  skip: page ? page * options.perPage : 0,
  limit: page ? page * options.perPage : options.perPage,
});

const query = async (find: object, skip: number, limit: number) => {
  const options = {
    name: 1,
    id: 1,
    types: 1,
  };
  const data = await PokemonModel.find(find, options).skip(skip).limit(limit);
  return data;
};

export default {
  getPokemons: async function (req: Request, res: Response) {
    try {
      const { type } = req.query;
      const page = req.params.page ? Number(req.params.page) : 0;
      const self_url = req.protocol + "://" + req.get("host");

      const { skip, limit } = paginate(page);

      const pokemons = await query(type ? { types: type } : {}, skip, limit);

      if (!pokemons.length) throw new Error("Pokemons not found");

      return res.json({
        results: pokemons,
        count: pokemons.length,
        success: true,
        prev:
          page && page - 1 >= 0
            ? self_url + `/pokemons/${page - 1}${type ? `?type=${type}` : ""}`
            : null,
        next: self_url + `/pokemons/${page + 1}${type ? `?type=${type}` : ""}`,
      });
    } catch (e: any) {
      const { name, message } = e;
      return res.status(404).json({ name, message, success: false });
    }
  },

  getPokemon: async function (req: Request, res: Response) {
    const { name } = req.params;
    const { skip, limit } = paginate(0);

    const query = ObjectId.isValid(name) ? { _id: name } : { name };
    const pokemon = await PokemonModel.findOne(query);

    res.json(pokemon);
  },
};
