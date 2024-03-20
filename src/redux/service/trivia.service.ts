import { api } from './api';
import { Trivia, TriviaAnswerResponse, TriviaQuestion } from './types/trivia.response';

export const triviaApi = api.injectEndpoints({
  endpoints: (builder) => ({
    triviaById: builder.query<Trivia, { triviaId: string }>({
      query: ({ triviaId }) => ({
        url: `api/trivia/question/${triviaId}`,
        method: 'GET',
      }),
    }),
    answerTrivia: builder.mutation<
      TriviaAnswerResponse,
      { triviaId: string; questionId: string; answer: string }
    >({
      query: (body) => ({
        url: `trivia/answer`,
        method: 'POST',
        body: body,
      }),
    }),
  }),
});

export const { useTriviaByIdQuery, useAnswerTriviaMutation } = triviaApi;
