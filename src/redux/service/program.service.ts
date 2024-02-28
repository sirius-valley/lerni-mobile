import { ProgramsData } from '../../redux/service/types/program.response';
import { api } from './api';
import { ProgramIdType, ProgramResponseType } from './types/program.response';

export const programApi = api.injectEndpoints({
  endpoints: (builder) => ({
    programById: builder.query<ProgramResponseType, ProgramIdType>({
      query: (id) => ({
        url: `api/program/${id}`,
        method: 'GET',
      }),
    }),
    homePrograms: builder.query<ProgramsData, void>({
      query: () => ({
        url: 'api/program/home',
        method: 'GET',
      }),
    }),
  }),
});

export const { useProgramByIdQuery, useHomeProgramsQuery, useLazyHomeProgramsQuery } = programApi;
