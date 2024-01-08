import { createSlice } from '@reduxjs/toolkit';
import { authApi } from '../service/auth.service';

interface InitialStateAuthType {
  token?: string;
}

const initialState: InitialStateAuthType = {
  token: undefined,
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchPending, (state, payload) => {
      const results = payload;
      console.log(results);
    });
    builder.addMatcher(authApi.endpoints.login.matchRejected, (state, payload) => {
      const results = payload;
      console.log(payload);
    });
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      const results = payload;
      state.token = results.token;
      console.log(results);
    });
  },
});

export default authSlice.reducer;
