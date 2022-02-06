import axios from "axios";

export const getPokemons = (page) => {
  return new Promise((resolve, reject) => {
    axios(page || "https://pokeapi.co/api/v2/pokemon/")
      .then(({ data }) => {
        Promise.all(data.results.map(({ url }) => axios(url)))
          .then((res) => {
            resolve({
              next: data.next,
              prev: data.previous,
              results: res,
            });
          })
          .catch(reject);
      })
      .catch((err) => reject(err));
  });
};
