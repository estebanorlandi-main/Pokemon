import { Request, Response, Router } from "express";
import pokemonRoutes from "./pokemon";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({
    home: {
      path: "/",
    },
    pokemon: [
      {
        path: "/pokemon",
        response: "return array of pokemons",
        query: null,
      },
      {
        path: "/pokemon/:id",
        response: "return pokemon by id",
        query: null,
      },
    ],
  });
});

router.use("/pokemon", pokemonRoutes);

export default router;
