import mongoose from "mongoose";
import PokemonModel from "../models/Pokemon";
import { load_pokemons } from "../utils/pokemon";
import { DB_HOST, DB_PORT, DB_NAME, DB_URI } from "../config";

const URI = DB_URI || `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

const db = mongoose.connection;

let restart = false;

db.once("open", () => {
  try {
    if (restart) {
      db.db
        .listCollections({ name: "pokemons" })
        .toArray(async (err, names) => {
          if (err || !names)
            return console.log("[DB]: Collection error: ", err);

          if (names[0].name === "pokemons") {
            try {
              await PokemonModel.collection.drop();
              console.log("[DB]: Collection droped");
              load_pokemons();
            } catch (e: any) {
              console.log(e);
            }
          }
        });
    }
  } catch (e: any) {
    console.log(e);
  }
});

interface RunOptions {
  reload?: boolean;
}

export default async function run({
  reload = false,
}: RunOptions): Promise<void> {
  try {
    restart = reload;
    await mongoose.connect(URI);
    console.log(`[DB]: Mongoose connected on ${URI}`);
  } catch (e: any) {
    console.log(`[DB]: Mongoose connection error!\n`);
    console.log(e);
  }
}
