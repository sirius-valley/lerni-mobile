import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { Platform } from 'react-native';
import * as SecureStore from 'expo-secure-store';

const baseQuery = fetchBaseQuery({
  baseUrl:
    process.env.REACT_APP_BASE_URL ||
    process.env.EXPO_PUBLIC_REACT_APP_BASE_URL ||
    'http://localhost:3000/',
  prepareHeaders: async (headers) => {
    const mobilePlatforms = ['android', 'ios'];
    if (mobilePlatforms.includes(Platform.OS)) {
      const token = await SecureStore.getItemAsync('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
    }
    return headers;
  },
});

export type CustomError =
  | FetchBaseQueryError
  | {
      status: 'FETCH_ERROR';
      data: any;
    };

const baseQueryInterceptor: BaseQueryFn<string | FetchArgs, unknown, CustomError> = async (
  args,
  api,
  extraOptions,
) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 401) {
    api.dispatch({ type: 'login/logout', payload: result.data });
  }
  return result;
};

export const api = createApi({
  reducerPath: 'generalApi',
  baseQuery: baseQueryInterceptor,
  tagTypes: ['ME', 'Introduction', 'MainPill', 'Home'],
  endpoints: () => ({}),
});
