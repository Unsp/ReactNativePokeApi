import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import {
  IPokemon,
  IPokemonListItem,
  PokemonListApiResponse,
  PokemonListParams,
} from "../model/types/pokemon.types";

export const PokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  tagTypes: ["PokeList", "Pokemon"],
  endpoints: (build) => ({
    fetchPokemonList: build.query<
      PokemonListApiResponse<IPokemonListItem>,
      PokemonListParams
    >({
      query: (params) => ({
        url: "pokemon",
        params,
      }),
      providesTags: ["PokeList"],
    }),

    fetchPokemonByName: build.query<IPokemon, string | number>({
      query: (name) => ({
        url: `pokemon/${name}`,
      }),
      providesTags: ["Pokemon"],
    }),
  }),
});
