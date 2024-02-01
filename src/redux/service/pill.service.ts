import { api } from './api';

export const pillApi = api.injectEndpoints({
  endpoints: (builder) => ({
    comments: builder.query({
      query: (id: string) => ({ url: `/pill/comments/${id}`, method: 'GET' }),
    }),
  }),
});

export const { useCommentsQuery } = pillApi;

export const {
  endpoints: { comments },
} = pillApi;
