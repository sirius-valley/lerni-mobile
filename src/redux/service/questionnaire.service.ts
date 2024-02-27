import { api } from './api';
import {
  QuestionnaireBody,
  QuestionnaireResponse,
  QuestionnaireState,
} from './types/questionnaire.response';

export const questionnaireApi = api.injectEndpoints({
  endpoints: (builder) => ({
    questionnaireById: builder.query<QuestionnaireResponse, { id: string }>({
      query: ({ id }) => ({
        url: `/api/questionnaire/${id}`,

        method: 'GET',
      }),
    }),
    answerQuestionnaire: builder.mutation<QuestionnaireResponse, QuestionnaireBody>({
      query: (body) => ({
        url: `/api/questionnaire/answer`,
        method: 'POST',
        body: body,
      }),
    }),
  }),
});

export const { useQuestionnaireByIdQuery, useAnswerQuestionnaireMutation } = questionnaireApi;
