import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

const encodeQuery = (data) => {
  const encoded = [];

  Object.entries(data).forEach((d) => {
    if (d[0] && d[0] !== 'page')
      encoded.push(`${encodeURIComponent(d[0])}=${encodeURIComponent(d[1])}`);
  });
  return encoded.join('&');
};

export const getPokemons = async ({ page, ...params }) => {
  const query = encodeQuery(params);
  const url = `${REACT_APP_API_URL}/pokemons${query ? `?${query}` : ''}`;
  const { data } = await axios(page || url);
  return data;
};

export const getDetails = (id) => axios(`${REACT_APP_API_URL}/pokemon/${id}`);
