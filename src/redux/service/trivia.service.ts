import { api } from './api';
import {
  AssignTriviaResponse,
  Trivia,
  TriviaQuestion,
  TriviaAnswerResponse,
} from './types/trivia.response';

export const triviaApi = api.injectEndpoints({
  endpoints: (builder) => ({
    triviaById: builder.query<Trivia, { triviaId: string }>({
      query: ({ triviaId }) => ({
        url: `trivia/${triviaId}`,
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
    assignTrivia: builder.query<AssignTriviaResponse, { programId: string }>({
      query: ({ programId }) => ({
        url: `trivia/assign/${programId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useTriviaByIdQuery, useAnswerTriviaMutation, useAssignTriviaQuery } = triviaApi;
