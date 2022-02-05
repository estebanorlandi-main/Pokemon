import { combineReducers } from "redux";
import pokemonReducer from "./pokemon";

const rootReducer = combineReducers({ pokemon: pokemonReducer });

export default rootReducer;
