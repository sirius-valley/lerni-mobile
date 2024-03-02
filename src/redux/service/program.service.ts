import { ProgramsData } from '../../redux/service/types/program.response';
import { api } from './api';
import { ProgramIdType, ProgramResponseType } from './types/program.response';
import { FeedbackBody } from './types/pill.response';

export const programApi = api.injectEndpoints({
  endpoints: (builder) => ({
    programById: builder.query<ProgramResponseType, ProgramIdType>({
      query: (id) => ({
        url: `api/program/${id}`,
        method: 'GET',
      }),
    }),
    homePrograms: builder.query<ProgramsData, void>({
      providesTags: ['Home'],
      query: () => ({
        url: 'api/program/home',
        method: 'GET',
      }),
    }),
    feedback: builder.mutation<void, FeedbackBody>({
      query: (body) => ({
        url: `/api/program/comment`,
        method: 'POST',
        body: body,
      }),
    }),
  }),
});

export const {
  useProgramByIdQuery,
  useHomeProgramsQuery,
  useLazyHomeProgramsQuery,
  // Feedback
  useFeedbackMutation,
} = programApi;
