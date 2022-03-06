import { Schema, model } from "mongoose";
import { PokemonType } from "../utils/Types";

export const TypeSchema: Schema = new Schema<PokemonType>({
  name: { type: String, required: true },
});

const TypeModel = model("Type", TypeSchema);

export default TypeModel;
