import axios from "axios";

const { REACT_APP_API_URL } = process.env;

export const getPokemons = async (page, type) => {
  const typeQuery = type ? `?type=${type}` : "";

  const url = REACT_APP_API_URL + `/pokemons${typeQuery}`;

  const { data } = await axios(url);
  return data;
};

export const getDetails = (id) => axios(`${REACT_APP_API_URL}/pokemon/${id}`);
