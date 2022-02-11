import * as Icons from "../components/Icons";

export { getPokemons, getDetails } from "./api";
export { useQuery } from "./hooks";

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
