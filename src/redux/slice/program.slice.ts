import { createSlice } from '@reduxjs/toolkit';
import { ProgramsData } from '../service/types/program.response';
import { programApi } from '../service/program.service';

interface initialStateType extends ProgramsData {
  id?: string;
}

const initialState: initialStateType = {
  // We need to remove this Programs reponses. They should be used with the "data" that the hook returns
  programsCompleted: [],
  programsInProgress: [],
  programsNotStarted: [],
  id: undefined,
};

export const programSlice = createSlice({
  name: 'programSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(programApi.endpoints.homePrograms.matchFulfilled, (state, action) => {
        state.programsCompleted = action.payload.programsCompleted;
        state.programsInProgress = action.payload.programsInProgress;
        state.programsNotStarted = action.payload.programsNotStarted;
      })
      .addMatcher(programApi.endpoints.programById.matchFulfilled, (state, action) => {
        state.id = action.payload.id;
      });
  },
});

export default programSlice.reducer;
