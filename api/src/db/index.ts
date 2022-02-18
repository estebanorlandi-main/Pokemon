import mongoose from "mongoose";
import PokemonModel from "../models/Pokemon";
import { load_pokemons } from "../utils/pokemon";
import { DB_HOST, DB_PORT, DB_NAME, DB_URI } from "../config";

const URI = DB_URI || `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

const db = mongoose.connection;

db.once("open", async () => {
  try {
    const pokemons = await PokemonModel.count({});
    console.log(pokemons);
    //if (!pokemons) await load_pokemons();
  } catch (e: any) {
    console.log(e);
  }
});

export default async function run(): Promise<void> {
  try {
    await mongoose.connect(URI);
    console.log(`[DB]: Mongoose connected on ${URI}`);
  } catch (e: any) {
    console.log(`[DB]: Mongoose connection error!\n`);
    console.log(e);
  }
}
