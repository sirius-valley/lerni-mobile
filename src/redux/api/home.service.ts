import { api } from '../service/api';

export const homeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    profile: builder.query({
      query: () => ({ url: '/profile/me', method: 'GET' }),
    }),
  }),
});

export const { useProfileQuery } = homeApi;

export const {
  endpoints: { profile },
} = homeApi;
