import { api } from './api';
import { SearchQueryParams, SearchResponse } from './types/home.response';

export const homeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    programEnrolled: builder.query({
      query: () => ({ url: '/home', method: 'GET' }),
    }),
    search: builder.query<SearchResponse, SearchQueryParams>({
      query: ({ page, filter, search }: SearchQueryParams) => ({
        url: `/api/search`,
        method: 'GET',
        params: { page, filter, search },
      }),
    }),
  }),
});

export const { useProgramEnrolledQuery, useSearchQuery } = homeApi;

export const {
  endpoints: { programEnrolled, search },
} = homeApi;
