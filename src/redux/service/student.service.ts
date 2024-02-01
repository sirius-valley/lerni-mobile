import { api } from './api';

export const profileApi = api.injectEndpoints({
  endpoints: (builder) => ({
    me: builder.query({
      query: () => ({ url: 'api/student/me', method: 'GET' }),
    }),
  }),
});

export const { useMeQuery } = profileApi;

export const {
  endpoints: { me },
} = profileApi;
