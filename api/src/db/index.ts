import mongoose from "mongoose";
import { DB_HOST, DB_PORT, DB_NAME } from "./config";
const URI = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

export default async function run(): Promise<void> {
  try {
    await mongoose.connect(URI);
    console.log(`[DB]: Mongoose connected on ${URI}`);
  } catch (e: any) {
    console.log(`[DB]: Mongoose connection error!\n`, e);
  }
}
