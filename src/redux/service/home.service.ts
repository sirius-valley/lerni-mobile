import { api } from './api';

export const homeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    programEnrolled: builder.query({
      query: () => ({ url: '/home', method: 'GET' }),
    }),
  }),
});

export const { useProgramEnrolledQuery } = homeApi;

export const {
  endpoints: { programEnrolled },
} = homeApi;
