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

export interface PokeamonAbilty {
  name: string;
}

export interface Pokemon {
  base_experience: number;
  height: number;
  id: number;
  name: string;
  weight: number;
  types: string[];
  stats: PokemonStat[];

  //sprites: any;
  //abilities: PokeamonAbilty[];
}
