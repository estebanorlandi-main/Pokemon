import { Router } from "express";
import PokemonController from "../controllers/pokemon";

const router = Router();

router.get("/", PokemonController.getPokemons);
router.get("/:page", PokemonController.getPokemons);

export default router;
