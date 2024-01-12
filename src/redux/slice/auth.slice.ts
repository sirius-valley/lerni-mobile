import { createSlice } from '@reduxjs/toolkit';
import { authApi } from '../service/auth.service';
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
    logout: (state) => {
      state.token = '';
      SecureStore.deleteItemAsync('token');
    },
    setToken: (state, payload) => {
      state.token = payload.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchPending, (state, payload) => {
      console.log('login pending: ', payload);
      state.token = '';
    });
    builder.addMatcher(authApi.endpoints.login.matchRejected, (state, payload) => {
      console.log('login rejected: ', payload);
    });
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.token = payload.token;
      SecureStore.setItemAsync('token', payload.token);
      console.log('login success: ', payload);
    });
    builder.addMatcher(authApi.endpoints.register.matchPending, (state, payload) => {
      console.log('register pending: ', payload);
      state.token = '';
    });
    builder.addMatcher(authApi.endpoints.register.matchRejected, (state, payload) => {
      console.log('register rejected: ', payload);
    });
    builder.addMatcher(authApi.endpoints.register.matchFulfilled, (state, { payload }) => {
      state.token = payload.token;
      SecureStore.setItemAsync('token', payload.token);
      console.log('register success: ', payload);
    });
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
