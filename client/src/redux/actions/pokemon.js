import { getPokemons, getDetails } from "utils";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_DETAILS_POKEMONS = "GET_DETAILS_POKEMONS";
export const REMOVE_DETAILS_POKEMON = "REMOVE_DETAILS_POKEMON";
export const REMOVE_POKEMONS = "REMOVE_POKEMONS";

export const fetchPokemons = (page) => {
  return async (dispatch) => {
    const promise = getPokemons(page);
    const res = await promise;

    dispatch({ type: GET_POKEMONS, payload: res });
  };
};

export const fetchDetails = (id) => {
  return async (dispatch) => {
    const promise = getDetails(id);
    const res = await promise;
    dispatch({ type: GET_DETAILS_POKEMONS, payload: res });
  };
};

export const removeDetails = () => ({ type: REMOVE_DETAILS_POKEMON });
export const removePokemons = () => ({ type: REMOVE_POKEMONS });
