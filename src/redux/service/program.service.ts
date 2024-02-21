import { api } from './api';

export const programApi = api.injectEndpoints({
    endpoints: (builder) => ({
        programById: builder.query<any, any>({
            query: (id) => ({
                url: `api/program/${id}`,
                method: 'GET',
            }),
        }),
    })
});

export const {
    useProgramByIdQuery,
} = programApi