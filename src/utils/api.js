import axios from "axios";

export const getPokemons = (page) =>
  new Promise((resolve, reject) =>
    axios(page || "https://pokeapi.co/api/v2/pokemon/")
      .then(({ data }) => {
        const promises = data.results.map(({ url }) => axios(url));
        Promise.all(promises)
          .then((res) => {
            resolve({
              next: data.next,
              prev: data.previous,
              results: res,
            });
          })
          .catch(reject);
      })
      .catch(reject)
  );

export const getDetails = (id) =>
  axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
