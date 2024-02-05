import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authApi, AuthType } from '../service/auth.service';
import * as SecureStore from 'expo-secure-store';

interface InitialStateAuthType {
  token: string;
}

const initialState: InitialStateAuthType = {
  token: '',
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setToken: (state, payload) => {
      state.token = payload.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchPending, (state) => {
      state.token = '';
    });
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action: PayloadAction<AuthType>) => {
        state.token = action.payload.token ?? '';
        SecureStore.setItemAsync('token', action.payload.token ?? '');
      },
    );
    builder.addMatcher(authApi.endpoints.register.matchPending, (state) => {
      state.token = '';
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

export const { setToken } = authSlice.actions;

export default authSlice.reducer;
