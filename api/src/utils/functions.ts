import PokemonModel from "../models/Pokemon";

export const type_exist = async (name: string) => {
  const pokemon = await PokemonModel.findOne({ name });
  return pokemon.name ? true : false;
};
