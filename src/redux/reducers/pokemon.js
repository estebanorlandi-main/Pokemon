import {
  GET_DETAILS_POKEMONS,
  GET_POKEMONS,
  REMOVE_DETAILS_POKEMON,
} from "redux/actions/pokemon";

const initialState = {
  pokemons: [],
  pokemon: {},
  next: "",
  prev: "",
};

function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      const {
        payload: { results, next, prev },
      } = action;

      return {
        ...state,
        pokemons: results.map(({ data }) => data),
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
    default:
      return state;
  }
}

export default pokemonReducer;
