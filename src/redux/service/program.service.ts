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
  }),
});

export const { useProgramByIdQuery } = programApi;
