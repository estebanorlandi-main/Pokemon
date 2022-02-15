import { Schema, model } from "mongoose";
import { Pokemon } from "../utils/pokemonTypes";

const PokemonSchema: Schema = new Schema<Pokemon>({
  name: { type: String, required: true },
  stats: [
    {
      base: String,
      name: String,
    },
  ],
  types: [{ type: String, required: false }],
});

const PokemonModel = model("Pokemon", PokemonSchema);

export default PokemonModel;
