import {
  GET_DETAILS_POKEMONS,
  GET_POKEMONS,
  REMOVE_DETAILS_POKEMON,
  REMOVE_POKEMONS,
  SET_SEARCH,
  SET_TYPE,
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
      const { results, next, page, prev, count, total, perPage } =
        action.payload;

      const viewed = total - (total - page * perPage - count);

      return {
        ...state,
        pokemons: results,
        viewed,
        total,
        page,
        next,
        prev,
      };

    case GET_DETAILS_POKEMONS:
      return {
        ...state,
        pokemon: action.payload?.data,
      };

    case SET_SEARCH:
      return {
        ...state,
        filters: { ...state.filters, search: action.payload },
      };
    case SET_TYPE:
      return {
        ...state,
        filters: { ...state.filters, type: action.payload, search: "" },
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
