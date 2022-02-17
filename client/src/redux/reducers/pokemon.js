import {
  GET_DETAILS_POKEMONS,
  GET_POKEMONS,
  REMOVE_DETAILS_POKEMON,
  REMOVE_POKEMONS,
} from "redux/actions/pokemon";

const initialState = {
  pokemons: [],
};

function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      const { results } = action.payload;

      return {
        ...state,
        pokemons: results,
        total: 0,
        total_pages: 0,
        next: null,
        prev: null,
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
