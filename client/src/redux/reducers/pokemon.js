import {
  GET_DETAILS_POKEMONS,
  GET_POKEMONS,
  REMOVE_DETAILS_POKEMON,
  REMOVE_POKEMONS,
} from "redux/actions/pokemon";

const initialState = {
  pokemons: [],
  next: null,
  prev: null,
  page: 0,
};

function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      const { results, next, page, prev } = action.payload;

      return {
        ...state,
        page,
        pokemons: results,
        next,
        prev,
      };

    case GET_DETAILS_POKEMONS:
      return {
        ...state,
        pokemon: action.payload?.data,
      };

    case REMOVE_DETAILS_POKEMON:
      return {
        ...state,
        pokemon: {},
      };

    case REMOVE_POKEMONS:
      return {
        ...state,
        pokemons: [],
      };

    default:
      return state;
  }
}

export default pokemonReducer;
