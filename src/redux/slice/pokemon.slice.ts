import { createSlice } from '@reduxjs/toolkit';
import { pokemonApi } from '../service/pokemon.service';

type initialStateHomeType = {
  pokemon: any;
};

const initialState: initialStateHomeType = {
  pokemon: {},
};

export const pokemonSlice = createSlice({
  name: 'pokemonSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(pokemonApi.endpoints.getPokemon.matchFulfilled, (state, payload) => {
      const results = payload;
      state.pokemon = results;
    });
  },
});

export default pokemonSlice.reducer;
