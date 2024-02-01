import { api } from '../service/api';

export const profileApi = api.injectEndpoints({
  endpoints: (builder) => ({
    profile: builder.query({
      query: () => ({ url: 'api/student/me', method: 'GET' }),
    }),
  }),
});

export const { useProfileQuery } = profileApi;

export const {
  endpoints: { profile },
} = profileApi;
