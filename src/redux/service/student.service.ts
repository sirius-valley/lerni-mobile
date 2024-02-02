import { api } from './api';
import { MeResponse } from './types/student.response';

export const profileApi = api.injectEndpoints({
  endpoints: (builder) => ({
    me: builder.query<MeResponse, void>({
      query: () => ({ url: 'api/student/me' }),
    }),
  }),
});

export const { useMeQuery, useLazyMeQuery } = profileApi;

export const {
  endpoints: { me },
} = profileApi;
