import {
  Comment,
  LeaderboardStudent,
  ProgramsData,
} from '../../redux/service/types/program.response';
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
    comments: builder.query<Comment[], string>({
      query: (id: string) => ({ url: `/api/program/${id}/comments`, method: 'GET' }),
    }),
    leaderboard: builder.query<LeaderboardStudent[], string>({
      query: (id: string) => ({ url: `/api/program/leaderboard/${id}`, method: 'GET' }),
    }),
  }),
});

export const updatePillById = (newPill: { id: string; percentage: number }, programId: string) =>
  // @ts-ignore
  api.util.updateQueryData('programById', programId, (draftPosts: ProgramResponseType) => {
    return {
      ...draftPosts,
      pills: draftPosts!.pills.map((pill) =>
        pill.id === newPill.id ? { ...pill, pillProgress: newPill.percentage } : pill,
      ),
    };
  });

export const {
  useProgramByIdQuery,
  useHomeProgramsQuery,
  useLazyHomeProgramsQuery,
  // Feedback
  useFeedbackMutation,

  // comment
  useCommentsQuery,

  // leaderboard
  useLeaderboardQuery,
} = programApi;
