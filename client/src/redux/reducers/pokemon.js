import {
  GET_DETAILS_POKEMONS,
  GET_POKEMONS,
  REMOVE_DETAILS_POKEMON,
  REMOVE_POKEMONS,
} from "redux/actions/pokemon";

const initialState = {
  pokemons: [],
  pokemon: {},
  total: 0,
  total_pages: 0,
  next: "",
  prev: "",
};

function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      const {
        payload: { results, next, prev, totalPokemons },
      } = action;

      return {
        ...state,
        pokemons: results.map(({ data }) => data),
        total: totalPokemons,
        total_pages: Math.ceil(totalPokemons / results.length),
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
