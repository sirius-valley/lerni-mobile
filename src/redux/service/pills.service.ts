import { api } from './api';
import { PillAnswerBody, PillResponse } from './types/pill.response';

export const pillsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    pillById: builder.query<any, any>({
      query: (id) => ({
        // MOCKED
        url: `pill/${id}`,
        method: 'GET',
      }),
    }),
    answer: builder.mutation<PillResponse, PillAnswerBody>({
      query: (body) => ({
        url: `/api/pill/answer`,
        method: 'POST',
        body: body,
      }),
    }),
    getIntroductionPill: builder.query<PillResponse, void>({
      query: () => ({
        url: `api/pill/introduction`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  usePillByIdQuery,
  useAnswerMutation,

  // introduction
  useGetIntroductionPillQuery,
} = pillsApi;
