import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { NODE_ENV } from "../config";
import PokemonModel from "../models/Pokemon";
import { getAll } from "../utils/pokemon";

const options = {
  perPage: 20,
};

const paginate = (page: number) => ({
  skip: page ? page * options.perPage : 0,
  limit: options.perPage,
});

export default {
  getPokemons: async function (req: Request, res: Response) {
    try {
      const { type, search } = req.query;
      const page = req.params.page ? Number(req.params.page) : 0;

      let self_url =
        (NODE_ENV !== "production" ? "http" : "https") +
        "://" +
        req.get("host");

      const { skip, limit } = paginate(page);

      const query: {
        types?: string;
        name?: { $regex: string; $options?: string };
      } = {};

      if (type) query.types = String(type);
      if (search) query.name = { $regex: String(search), $options: "i" };

      const pokemons = await getAll({
        find: query,
        options: { name: 1, id: 1, types: 1 },
        skip,
        limit,
      });

      if (!pokemons.length) throw new Error("Pokemons not found");

      let prev: string | null = "";
      let next: string | null = "";

      if (page - 1 >= 0) {
        prev += self_url + `/pokemons/${page - 1}`;
        if (type) prev += "?type=" + type;
      } else {
        prev = null;
      }

      const totalPokemons = await PokemonModel.find({});

      if ((page + 1) * options.perPage <= totalPokemons.length) {
        next += self_url + `/pokemons/${page + 1}`;
        if (type) next += "?type=" + type;
      } else {
        next = null;
      }

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
      return res
        .status(404)
        .json({ pokemons: [], name, message, success: false });
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
