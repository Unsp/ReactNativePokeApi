
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {userReducer} from "src/entities/user/user.slice";
import { PokemonApi } from "src/entities/pokemon/api/PokemonApi";


const rootReducer = combineReducers({
    userReducer,
    [PokemonApi.reducerPath]: PokemonApi.reducer
});

export const setupStore = () => {

    return configureStore({
        reducer:rootReducer,
        middleware:(getDefaultMiddleware) => 
            getDefaultMiddleware({
                serializableCheck: {warnAfter: 500}
            }).concat(PokemonApi.middleware)
    });
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']