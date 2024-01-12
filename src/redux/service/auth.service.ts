import { api } from './api';

export type AuthType = { token?: string; data: { message: string } };

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthType, { email: string; password: string }>({
      query: ({ email, password }) => ({
        url: `auth/login`,
        method: 'POST',
        body: { email, password },
      }),
    }),
    register: builder.mutation<AuthType, { email: string; password: string }>({
      query: ({ email, password }) => ({
        url: `auth/register`,
        method: 'POST',
        body: { email, password },
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
