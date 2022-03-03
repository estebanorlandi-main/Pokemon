import { getPokemons, getDetails } from 'utils';

export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_DETAILS_POKEMONS = 'GET_DETAILS_POKEMONS';
export const REMOVE_DETAILS_POKEMON = 'REMOVE_DETAILS_POKEMON';
export const REMOVE_POKEMONS = 'REMOVE_POKEMONS';
export const SET_SEARCH = 'SET_SEARCH';
export const SET_TYPE = 'SET_TYPE';
export const ERROR = 'ERROR';

export const fetchPokemons =
  ({ page, type, search }) =>
  async (dispatch) => {
    dispatch({ type: REMOVE_POKEMONS });
    try {
      const payload = await getPokemons({ page, type, search });
      dispatch({ type: GET_POKEMONS, payload });
      return payload;
    } catch (e) {
      dispatch({ type: ERROR, payload: e.response.data });
      return e;
    }
  };

export const fetchDetails = (id) => async (dispatch) => {
  dispatch({ type: REMOVE_DETAILS_POKEMON });
  const promise = getDetails(id);
  const res = await promise;
  dispatch({ type: GET_DETAILS_POKEMONS, payload: res });
};

export const setSearch = (search) => ({ type: SET_SEARCH, payload: search });
export const setType = (type) => ({ type: SET_TYPE, payload: type });

export const removeDetails = () => ({ type: REMOVE_DETAILS_POKEMON });
export const removePokemons = () => ({ type: REMOVE_POKEMONS });
