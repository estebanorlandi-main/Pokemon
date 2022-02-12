export interface PokeapiPokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;

  results: [{ name: string; url: string }];
}

export interface PokeapiSprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface PokeapiStats {
  base_stat: number;
  effort: number;
  stat: { name: string; url: string };
}
export interface PokeapiType {
  slot: number;
  type: { name: string; url: string };
}

export interface PokeapiPokemon {
  abilities: any;
  game_indices: any;
  held_items: any;

  base_experience: number;
  height: number;
  id: number;
  name: string;
  sprites: PokeapiSprites;
  stats: PokeapiStats[];
  types: PokeapiType[];
  weight: number;
}
