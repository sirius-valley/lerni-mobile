import { createSlice } from '@reduxjs/toolkit';
import { ProgramsData } from '../service/types/program.response';
import { programApi } from '../service/program.service';

const initialState: ProgramsData = {
  programsCompleted: [],
  programsInProgress: [],
  programsNotStarted: [],
};

export const programSlice = createSlice({
  name: 'programSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(programApi.endpoints.homePrograms.matchFulfilled, (state, action) => {
      state.programsCompleted = action.payload.programsCompleted;
      state.programsInProgress = action.payload.programsInProgress;
      state.programsNotStarted = action.payload.programsNotStarted;
    });
  },
});

export default programSlice.reducer;
