import { GET_POKEMONS } from "redux/actions/pokemon";

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
    default:
      return state;
  }
}

export default pokemonReducer;
