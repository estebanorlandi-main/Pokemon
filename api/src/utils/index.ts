import PokemonModel from "../models/Pokemon";

export const type_exist = async (name: string) => {
  const pokemon = await PokemonModel.findOne({ name });
  return pokemon.name ? true : false;
};

export const queryToString = (query: object) => {
  const arrQuery: string[] = [];

  Object.entries(query).map((entry) => {
    const [prop, value] = entry;
    if (value) {
      arrQuery.push(`${prop}=${value}`);
    }
  });

  return arrQuery.length ? "?" + arrQuery.join("&") : "";
};
