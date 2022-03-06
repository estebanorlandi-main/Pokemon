import { Schema, model } from "mongoose";
import { Pokemon } from "../utils/Types";

const PokemonSchema: Schema = new Schema<Pokemon>({
  name: { type: String, required: true },
  id: { type: Number, required: true },
  base_experience: { type: Number, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },

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
