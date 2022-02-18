import { Request, Response, Router } from "express";

import pokemonsRoutes from "./pokemons";
import pokemonRoutes from "./pokemon";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({
    home: {
      path: "/",
    },
    pokemons: [
      {
        path: "/pokemons",
        response: "return array of pokemons",
        query: null,
      },
      {
        path: "/pokemons/:page",
        response: "return pokemons in page",
        query: null,
      },
    ],
  });
});

router.use("/pokemons", pokemonsRoutes);
router.use("/pokemon", pokemonRoutes);

export default router;
