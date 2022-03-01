import * as Icons from "../components/Icons";

export { getPokemons, getDetails } from "./api";

export const getPokemonImage = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

const icons = {
  bug: Icons.Bug,
  dark: Icons.Dark,
  dragon: Icons.Dragon,
  electric: Icons.Electric,
  fairy: Icons.Fairy,
  fighting: Icons.Fighting,
  fire: Icons.Fire,
  flying: Icons.Flying,
  ghost: Icons.Ghost,
  grass: Icons.Grass,
  ground: Icons.Ground,
  ice: Icons.Ice,
  normal: Icons.Normal,
  poison: Icons.Poison,
  psychic: Icons.Psychic,
  rock: Icons.Rock,
  steel: Icons.Steel,
  water: Icons.Water,
};

export const getIconComponent = (type) => icons[type] || Icons.Normal;

export const remToPx = (rem) =>
  rem * parseFloat(getComputedStyle(document.documentElement).fontSize);

export const typesArray = [
  "bug",
  "dark",
  "dragon",
  "electric",
  "fairy",
  "fighting",
  "fire",
  "flying",
  "ghost",
  "grass",
  "ground",
  "ice",
  "normal",
  "poison",
  "psychic",
  "rock",
  "steel",
  "water",
];
