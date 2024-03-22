import { api } from './api';
import {
  Trivia,
  TriviaAnswerResponse,
  TriviaHistoryCardProps,
  TriviaQueryParams,
  TriviaQuestion,
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
    triviaHistory: builder.query<TriviaHistoryCardProps[], TriviaQueryParams>({
      query: (page: TriviaQueryParams) => ({
        url: `trivia/history`,
        method: 'GET',
        params: page,
      }),
    }),
  }),
});

export const { useTriviaByIdQuery, useAnswerTriviaMutation, useTriviaHistoryQuery } = triviaApi;
