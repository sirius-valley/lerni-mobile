import { api } from './api';
import {Trivia, TriviaQuestion} from "./types/trivia-responses.type";


export const triviaApi = api.injectEndpoints({
    endpoints: (builder) => ({
        triviaById: builder.query<Trivia, { triviaId: string }>({
            query: ({ triviaId }) => ({
                url: `trivia/${triviaId}`,
                method: 'GET',
            }),
        }),
        answerTrivia: builder.mutation<TriviaQuestion, {
            triviaId: string | string[]
            questionId: string
            answer: string
        }>({
            query: (body) => ({
                url: `trivia/answer`,
                method: 'POST',
                body: body,
            }),
        })
    }),
});

export const { useTriviaByIdQuery, useAnswerTriviaMutation } = triviaApi;
