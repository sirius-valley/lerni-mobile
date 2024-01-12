import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authApi, AuthType } from '../service/auth.service';
import * as SecureStore from 'expo-secure-store';

interface InitialStateAuthType {
  token: string;
  loginErrorMessage: string;
  registerErrorMessage: string;
}

const initialState: InitialStateAuthType = {
  token: '',
  loginErrorMessage: '',
  registerErrorMessage: '',
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = '';
      SecureStore.deleteItemAsync('token');
    },
    setToken: (state, payload) => {
      state.token = payload.payload;
    },
    resetErrorMessage: (state) => {
      state.loginErrorMessage = '';
      state.registerErrorMessage = '';
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchPending, (state, action) => {
      state.token = '';
      state.loginErrorMessage = '';
    });
    builder.addMatcher(authApi.endpoints.login.matchRejected, (state, action: any) => {
      state.loginErrorMessage = action.payload?.data?.message ?? '';
    });
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action: PayloadAction<AuthType>) => {
        state.token = action.payload.token ?? '';
        SecureStore.setItemAsync('token', action.payload.token ?? '');
      },
    );
    builder.addMatcher(authApi.endpoints.register.matchPending, (state, action) => {
      state.token = '';
      state.registerErrorMessage = '';
    });
    builder.addMatcher(authApi.endpoints.register.matchRejected, (state, action: any) => {
      state.registerErrorMessage = action.payload?.data.message ?? '';
    });
    builder.addMatcher(
      authApi.endpoints.register.matchFulfilled,
      (state, action: PayloadAction<AuthType>) => {
        state.token = action.payload.token ?? '';
        SecureStore.setItemAsync('token', action.payload.token ?? '');
      },
    );
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
