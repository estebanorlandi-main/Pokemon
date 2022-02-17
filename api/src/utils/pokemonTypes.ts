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
  id: number;
  types: string[];
  stats: PokemonStat[];
}
