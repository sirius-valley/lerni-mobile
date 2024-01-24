import { api } from './api';

export const mockedPill = {
  pillId: 'id01',
  pillHeader: {
    title: 'Test_pill',
    pillNumber: 1,
    percentageDone: 0.3,
  },
  pillBody: [
    {
      id: 'bodypill_id_01',
      user: 'professor' as UserType,
      content: 'Respuesta',
      type: 'text' as PillBodyType,
      isLast: false,
    },
    {
      id: 'bodypill_id_02',
      user: 'professor' as UserType,
      content: 'Y otra pregunta para que responda el alumno?',
      type: 'text' as PillBodyType,
      isLast: true,
    },
    {
      id: 'bodypill_id_03',
      user: 'student' as UserType,
      content: 'Respuesta del alumno',
      type: 'text' as PillBodyType,
      isLast: true,
    },
    {
      id: 'bodypill_id_04',
      user: 'student' as UserType,
      content: '',
      type: 'free_text' as PillBodyType,
      isLast: true,
    },
  ],
};

type UserType = 'student' | 'professor';
export type PillBodyType = 'image' | 'text' | 'free_text';
type PillsType = typeof mockedPill;

export const pillsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPillById: builder.mutation<PillsType, { pillId: string }>({
      query: ({ pillId }) => ({
        url: `pill`,
        method: 'POST',
        body: { pillId },
      }),
    }),
    answerPill: builder.mutation<PillsType, { content: string; contentType: 'text' | 'image' }>({
      query: ({ content, contentType }) => ({
        url: `pill/answer`,
        method: 'POST',
        body: { content, contentType },
      }),
    }),

    pillById: builder.query<any, any>({
      query: (id) => ({
        url: `pill/${id}`,
        method: 'GET',
      }),
    }),
    answer: builder.mutation<any, any>({
      query: (id) => ({
        url: `pill/${id}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetPillByIdMutation,
  useAnswerPillMutation,
  usePillByIdQuery,
  useAnswerMutation,
} = pillsApi;
