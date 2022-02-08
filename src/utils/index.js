import * as Icons from "../components/Icons";
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

export const getPokemonImage = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

export function getIconComponent(type) {
  switch (type) {
    case "bug":
      return Icons.Bug;
    case "dark":
      return Icons.Dark;
    case "dragon":
      return Icons.Dragon;
    case "electric":
      return Icons.Electric;
    case "fairy":
      return Icons.Fairy;
    case "fighting":
      return Icons.Fighting;
    case "fire":
      return Icons.Fire;
    case "flying":
      return Icons.Flying;
    case "ghost":
      return Icons.Ghost;
    case "grass":
      return Icons.Grass;
    case "ground":
      return Icons.Ground;
    case "ice":
      return Icons.Ice;
    case "normal":
      return Icons.Normal;
    case "poison":
      return Icons.Poison;
    case "psychic":
      return Icons.Psychic;
    case "rock":
      return Icons.Rock;
    case "steel":
      return Icons.Steel;
    case "water":
      return Icons.Water;
    default:
      return Icons.Normal;
  }
}

export const remToPx = (rem) =>
  rem * parseFloat(getComputedStyle(document.documentElement).fontSize);

export const typesArray = [
  { type: { name: "bug" } },
  { type: { name: "dark" } },
  { type: { name: "dragon" } },
  { type: { name: "electric" } },
  { type: { name: "fairy" } },
  { type: { name: "fighting" } },
  { type: { name: "fire" } },
  { type: { name: "flying" } },
  { type: { name: "ghost" } },
  { type: { name: "grass" } },
  { type: { name: "ground" } },
  { type: { name: "ice" } },
  { type: { name: "normal" } },
  { type: { name: "poison" } },
  { type: { name: "psychic" } },
  { type: { name: "rock" } },
  { type: { name: "steel" } },
  { type: { name: "water" } },
];
