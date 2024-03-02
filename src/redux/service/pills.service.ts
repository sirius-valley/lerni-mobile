import { api } from './api';
import { FeedbackBody, PillAnswerBody, PillResponse } from './types/pill.response';

interface PillByIdParams {
  id: string;
}

export const pillsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    pillById: builder.query<PillResponse, PillByIdParams>({
      providesTags: ['MainPill'],
      query: ({ id }) => ({
        url: `api/pill/${id}`,
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
      providesTags: ['Introduction'],
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
