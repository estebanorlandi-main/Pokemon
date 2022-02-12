import { Schema, model } from "mongoose";
import { PokemonType } from "../utils/pokemonTypes";

export const TypeSchema: Schema = new Schema<PokemonType>({
  name: { type: String, required: true },
});

const TypeModel = model("Type", TypeSchema);

export default TypeModel;
