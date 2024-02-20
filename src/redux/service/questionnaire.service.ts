import { api } from './api';

export const questionnaireApi = api.injectEndpoints({
  endpoints: (builder) => ({
    questionnaireById: builder.query<any, { id: string }>({
      query: (id) => ({
        url: `questionnaire/${id}`,
        method: 'GET',
      }),
    }),
    answerQuestionnaire: builder.mutation<any, any>({
      query: (body) => ({
        url: `/api/questionnaire/answer`,
        method: 'POST',
        body: body,
      }),
    }),
  }),
});

export const { useQuestionnaireByIdQuery } = questionnaireApi;
