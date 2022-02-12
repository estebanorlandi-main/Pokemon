import { Request, Response } from "express";

const filter = () => {};

export default {
  getPokemons: function (req: Request, res: Response) {
    res.json("getPokemons");
  },
  searchPokemons: function (req: Request, res: Response) {
    res.json("searchPokemons");
  },
};
