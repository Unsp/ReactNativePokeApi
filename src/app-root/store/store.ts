import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { PokemonApi } from "src/entities/pokemon/api/PokemonApi";
import { recentPokemonReducer } from "src/entities/pokemon/model/slice/recentPokemon.slice";
import { userReducer } from "src/entities/user/model/slice/user.slice";

const rootReducer = combineReducers({
  userReducer,
  recentPokemonReducer,
  [PokemonApi.reducerPath]: PokemonApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: { warnAfter: 500 },
      }).concat(PokemonApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
