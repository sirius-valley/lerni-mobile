import { api } from './api';

export const profileApi = api.injectEndpoints({
  endpoints: (builder) => ({
    me: builder.query<any, void>({
      query: () => ({ url: 'api/student/me' }),
    }),
  }),
});

export const { useMeQuery, useLazyMeQuery } = profileApi;

export const {
  endpoints: { me },
} = profileApi;
