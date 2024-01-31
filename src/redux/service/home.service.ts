import { api } from './api';

export const homeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    programEnrolled: builder.query({
      query: () => ({ url: '/home', method: 'GET' }),
    }),
    aboutMe: builder.query<any, void>({
      query: () => ({ url: 'api/student/me' }),
    }),
  }),
});

export const { useProgramEnrolledQuery, useLazyAboutMeQuery } = homeApi;

export const {
  endpoints: { programEnrolled, aboutMe },
} = homeApi;
