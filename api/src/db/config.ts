export const DB_NAME: string = process.env.DB_NAME || "pokemon";
export const DB_HOST: string = process.env.DB_HOST || "127.0.0.1";
export const DB_PORT: string = process.env.DB_PORT || "27017";
export const DB_USER: string = process.env.DB_USER || "";

export default {
  DB_NAME,
  DB_HOST,
  DB_PORT,
  DB_USER,
};
