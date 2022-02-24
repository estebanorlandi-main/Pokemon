import axios from "axios";

const { REACT_APP_API_URL } = process.env;

const encodeQuery = (data) => {
  const encoded = [];
  for (let d in data)
    if (data[d] && d !== "page")
      encoded.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
  return encoded.join("&");
};

export const getPokemons = async (q) => {
  try {
    let query = encodeQuery(q);

    const url = REACT_APP_API_URL + `/pokemons${query ? "?" + query : ""}`;

    const { data } = await axios(q.page || url);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getDetails = (id) => axios(`${REACT_APP_API_URL}/pokemon/${id}`);
