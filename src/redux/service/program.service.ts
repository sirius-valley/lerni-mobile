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
      providesTags: (result, error, arg) => [{ type: 'ProgramById', id: result!.id }],
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
    const newPills = draftPosts!.pills.map((pill) =>
      pill.id === newPill.id ? { ...pill, pillProgress: newPill.percentage } : pill,
    );
    const isQuestionnaireAvailable = newPills.find((pill) => pill.pillProgress !== 100);
    const PillsOrQuestionnariesCompleted =
      (newPills.filter((pill) => pill.pillProgress === 100)?.length ?? 0) +
      (draftPosts.questionnaire?.questionnaireProgress === 100 ? 1 : 0);
    // console.log(JSON.stringify(draftPosts),newPills.filter((pill)=>pill.pillProgress === 100)?.length,draftPosts.questionnaire?.questionnaireProgress === 100,newPills?.length + 1)

    return {
      ...draftPosts,
      progress: (PillsOrQuestionnariesCompleted / (newPills?.length + 1)) * 100,
      pills: newPills,
      questionnaire: {
        ...draftPosts.questionnaire,
        isLocked: !!isQuestionnaireAvailable,
      },
    };
  });

export const updateQuestionnaireByProgramId = (percentage: number, programId: string) =>
  // @ts-ignore
  api.util.updateQueryData('programById', programId, (draftPosts: ProgramResponseType) => {
    return {
      ...draftPosts,
      questionnaire: {
        ...draftPosts.questionnaire,
        questionnaireProgress: percentage,
      },
    };
  });

export const unlockQuestionnaireById = (programId: string) =>
  // @ts-ignore
  api.util.updateQueryData('programById', programId, (draftPosts: ProgramResponseType) => {
    return {
      ...draftPosts,
      questionnaire: {
        ...draftPosts.questionnaire,
        isLocked: false,
        lockedUntil: undefined,
      },
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
