import { combineReducers } from 'redux';
import pokemonReducer from './pokemon';
import errorsReducer from './errors';

const rootReducer = combineReducers({
  pokemons: pokemonReducer,
  errors: errorsReducer,
});

export default rootReducer;
