import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { NODE_ENV } from "../config";
import PokemonModel from "../models/Pokemon";

const options = {
  perPage: 20,
};

const paginate = (page: number) => ({
  skip: page ? page * options.perPage : 0,
  limit: options.perPage,
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
      let self_url =
        (NODE_ENV !== "production" ? "http" : "https") +
        "://" +
        req.get("host");

      const { skip, limit } = paginate(page);

      const pokemons = await query(type ? { types: type } : {}, skip, limit);

      if (!pokemons.length) throw new Error("Pokemons not found");

      let prev: string | null = "";
      let next: string | null = "";

      if (page - 1 >= 0) {
        prev += self_url + `/pokemons/${page - 1}`;
        if (type) prev += "?type=" + type;
      } else {
        prev = null;
      }

      const totalPokemons = await PokemonModel.find(
        type ? { types: type } : {}
      );

      if ((page + 1) * options.perPage <= totalPokemons.length) {
        next += self_url + `/pokemons/${page + 1}`;
        if (type) next += "?type=" + type;
      } else {
        next = null;
      }
      console.log(next);

      return res.json({
        count: pokemons.length,
        next,
        page,
        prev,
        results: pokemons,
        success: true,
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
