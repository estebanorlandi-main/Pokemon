import PokemonModel from "../models/Pokemon";
import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { queryToString } from "../utils";
import { nextUrl, settings, prevUrl } from "../utils/paginate";
import { getAll } from "../utils/pokemonGetAll";
import { getUrl } from "../utils/getUrl";

export default {
  getPokemons: async function (req: Request, res: Response) {
    try {
      const { type, search, order } = req.query;
      const page = req.params.page ? Number(req.params.page) : 0;

      const url = getUrl(req) + "/pokemons";

      const find = {
        ...(type ? { types: type } : {}),
        ...(search ? { name: { $regex: search, $options: "i" } } : {}),
      };

      const include = { name: 1, id: 1, types: 1 };
      const sort = { id: order ? Number(order) : 1 };

      const pokemons = await getAll({ find, include, sort, page });
      const totalElements = await PokemonModel.count(find);

      const query = queryToString(req.query);
      const paginate = {
        page,
        perPage: settings.perPage,
        prev: prevUrl({ url, query, page }),
        next: nextUrl({ url, query, page, totalElements }),
      };

      return res.json({
        count: pokemons.length,
        total: totalElements,
        results: pokemons,
        metadata: { success: true },
        paginate,
      });
    } catch (e: any) {
      const { name, message } = e;
      return res.status(404).json({
        metadata: { success: false },
        error: { name, message },
        pokemons: [],
      });
    }
  },

  getPokemon: async function (req: Request, res: Response) {
    const { name } = req.params;

    const query = ObjectId.isValid(name) ? { _id: name } : { name };
    const pokemon = await PokemonModel.findOne(query);

    res.json(pokemon);
  },
};
