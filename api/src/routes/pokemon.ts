import { Router } from "express";
import PokemonController from "../controllers/pokemon";

const router = Router();

router.get("/:name", PokemonController.getPokemon);

export default router;
