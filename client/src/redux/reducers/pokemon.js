import {
  GET_DETAILS_POKEMONS,
  GET_POKEMONS,
  REMOVE_DETAILS_POKEMON,
  REMOVE_POKEMONS,
  SET_SEARCH,
  SET_TYPE,
} from 'redux/actions/pokemon';

const initialState = {
  pokemons: [],
  next: null,
  prev: null,
  page: 0,
};

function pokemonReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_POKEMONS: {
      const { results, paginate, count, total } = action.payload;

      const viewed = total - (total - paginate.page * paginate.perPage - count);

      return {
        ...state,
        ...paginate,

        pokemons: results,
        viewed,
        total,
      };
    }

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
        filters: { ...state.filters, type: action.payload, search: '' },
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
