import { api } from './api';
import { PokemonResponse } from './types/';

export const pokemonApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPokemon: builder.query<PokemonResponse, string>({
      query: () => ({
        url: `https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetPokemonQuery } = pokemonApi;
