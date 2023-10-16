import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PokemonRecentState } from "../model/types/pokemon.types";

const initialState: PokemonRecentState = {
  pokemonIds: [1, 2, 3, 4, 5],
};

export const recentPokemonSlice = createSlice({
  name: "recentPokemon",
  initialState,
  reducers: {
    pushRecent(state, action: PayloadAction<number>) {
      state.pokemonIds = [
        action.payload,
        ...state.pokemonIds.filter((id) => id != action.payload).slice(0, 10),
      ];
    },
  },
});

export default recentPokemonSlice;
export const recentPokemonReducer = recentPokemonSlice.reducer;
