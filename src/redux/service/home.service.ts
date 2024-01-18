import { api } from './api';

export const homeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    home: builder.query({
      query: () => ({ url: '/home', method: 'GET' }),
    }),
  }),
});

export const { useHomeQuery } = homeApi;

export const {
  endpoints: { home },
} = homeApi;
