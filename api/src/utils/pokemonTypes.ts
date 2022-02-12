export interface PokemonSprite {
  url: string;
  name: string;
}

export interface PokemonStat {
  base: number;
  name: string;
}

export interface PokemonType {
  name: string;
}

export interface Pokemon {
  name: string;
  types: PokemonType[];
  stats: PokemonStat[];
}
