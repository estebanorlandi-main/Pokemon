import { Request } from "express";
import { NODE_ENV } from "../config";

export const getUrl = (req: Request) => {
  const PROTOCOL = NODE_ENV !== "production" ? "http" : "https";
  return PROTOCOL + "://" + req.get("host");
};
