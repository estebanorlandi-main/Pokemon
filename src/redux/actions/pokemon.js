import { getPokemons } from "utils";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_DETAILS_POKEMONS = "GET_DETAILS_POKEMONS";

export const fetchPokemons = (page) => {
  return async (dispatch) => {
    const promise = getPokemons(page);
    const res = await promise;
    dispatch({ type: GET_POKEMONS, payload: res });
  };
};
