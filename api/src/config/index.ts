import * as dotenv from "dotenv";

dotenv.config({ path: __dirname + "/../../.env" });

/**
 *
 * APP
 *
 **/

export const NODE_ENV: string = process.env.NODE_ENV || "development";

/**
 *
 * Express
 *
 **/

export const PORT: number = Number(process.env.PORT) || 8000;

/**
 *
 * DB
 *
 **/

export const DB_USER: string = process.env.DB_USER || "";
export const DB_PASSWORD: string = process.env.DB_PASSWORD || "";
export const DB_HOST: string = process.env.DB_HOST || "127.0.0.1";
export const DB_PORT: string = process.env.DB_PORT || "27017";
export const DB_NAME: string = process.env.DB_NAME || "pokemon";
export const DB_OPTIONS: string = process.env.DB_NAME || "";

export const DB_URI: string = process.env.DB_URI || "";

export default {
  DB_NAME,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_OPTIONS,
};
