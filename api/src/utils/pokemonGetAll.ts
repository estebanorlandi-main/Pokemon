import PokemonModel from "../models/Pokemon";
import { paginate } from "./paginate";
import { Pokemon } from "./Types";

type FnParams = {
  find: object;
  include: object;
  page?: number;
  sort: object;
};

type GetAll = (_obj: FnParams) => Promise<Pokemon[]>;

export const getAll: GetAll = async ({ find, include, page = 0, sort }) => {
  const { skip, limit } = paginate(page);
  return await PokemonModel.find(find, include, {
    sort,
    skip,
    limit,
  });
};
