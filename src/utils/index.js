import axios from "axios";

import bug from "../assets/icons/bug.svg";
import dark from "../assets/icons/dark.svg";
import dragon from "../assets/icons/dragon.svg";
import electric from "../assets/icons/electric.svg";
import fairy from "../assets/icons/fairy.svg";
import fighting from "../assets/icons/fighting.svg";
import fire from "../assets/icons/fire.svg";
import flying from "../assets/icons/flying.svg";
import ghost from "../assets/icons/ghost.svg";
import grass from "../assets/icons/grass.svg";
import ground from "../assets/icons/ground.svg";
import ice from "../assets/icons/ice.svg";
import normal from "../assets/icons/normal.svg";
import poison from "../assets/icons/poison.svg";
import psychic from "../assets/icons/psychic.svg";
import rock from "../assets/icons/rock.svg";
import steel from "../assets/icons/steel.svg";
import water from "../assets/icons/water.svg";

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

export const getTypeIcon = (type) => {
  if (type === "bug") return bug;
  if (type === "dark") return dark;
  if (type === "dragon") return dragon;
  if (type === "electric") return electric;
  if (type === "fairy") return fairy;
  if (type === "fighting") return fighting;
  if (type === "fire") return fire;
  if (type === "flying") return flying;
  if (type === "ghost") return ghost;
  if (type === "grass") return grass;
  if (type === "ground") return ground;
  if (type === "ice") return ice;
  if (type === "normal") return normal;
  if (type === "poison") return poison;
  if (type === "psychic") return psychic;
  if (type === "rock") return rock;
  if (type === "steel") return steel;
  if (type === "water") return water;
};
