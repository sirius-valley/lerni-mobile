import { api } from './api';

export const homeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    programEnrolled: builder.query({
      query: () => ({ url: '/home', method: 'GET' }),
    }),
    search: builder.query({
      query: ({ page, filter, search }) => ({
        url: `/search?page=${page}&filter=${filter}&search=${search}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useProgramEnrolledQuery, useSearchQuery } = homeApi;

export const {
  endpoints: { programEnrolled, search },
} = homeApi;
