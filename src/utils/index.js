import axios from "axios";

export const getPokemons = () => {
  return new Promise((resolve, reject) => {
    axios("https://pokeapi.co/api/v2/pokemon/")
      .then(({ data }) => {
        Promise.all(data.results.map(({ url }) => axios(url)))
          .then(resolve)
          .catch(reject);
      })
      .catch((err) => reject(err));
  });
};
