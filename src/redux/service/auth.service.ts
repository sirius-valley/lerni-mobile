import { api } from "./api";

export const authApi = api.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.query<{token: string}, string>({
			query: () => ({
				url: `auth/login`,
				method: 'GET',
			})
		}),
		register: builder.mutation<void, {email: string, password: string}>({
			query: ({ email, password }) => ({
				url: `auth/register`,
				method: 'POST',
				body: { email, password },
			})
		})
	})
});

export const { useLoginQuery, useRegisterMutation } = authApi;