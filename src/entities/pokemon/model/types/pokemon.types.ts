export interface IPokemonListItem {
  name: string;
  url: string;
}

export interface PokemonListParams {
  limit: number;
  offset: number;
}

export interface PokemonListApiResponse<T> {
  results: T[];
  count: number;
}

export interface IPokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: [
    {
      type: {
        name: string;
      };
    },
  ];
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    },
  ];
}

export interface PokemonRecentState {
  pokemonIds: number[];
}
