import { createSlice } from '@reduxjs/toolkit';

interface InitialStateQuestionnaireType {}

const initialState: InitialStateQuestionnaireType = {};

export const questionnaireSlice = createSlice({
  name: 'questionnaireSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default questionnaireSlice.reducer;
