import { createSlice } from '@reduxjs/toolkit';
import { ProgramsData } from '../service/types/program.response';
import { programApi } from '../service/program.service';
import { pillSlice } from './pill.slice';
import { questionnaireApi } from '../service/questionnaire.service';

interface initialStateType extends ProgramsData {
  id?: string;
  questionnaireUnlockTime: string;
}

const initialState: initialStateType = {
  // We need to remove this Programs reponses. They should be used with the "data" that the hook returns
  programsCompleted: [],
  programsInProgress: [],
  programsNotStarted: [],
  id: undefined,
  questionnaireUnlockTime: '',
};

export const programSlice = createSlice({
  name: 'programSlice',
  initialState,
  reducers: {
    setProgramId: (state, action) => {
      state.id = action.payload.id;
    },
    unlockQuestionnaire: (state) => {
      state.questionnaireUnlockTime = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(programApi.endpoints.homePrograms.matchFulfilled, (state, action) => {
        state.programsCompleted = action.payload.programsCompleted;
        state.programsInProgress = action.payload.programsInProgress;
        state.programsNotStarted = action.payload.programsNotStarted;
      })
      .addMatcher(programApi.endpoints.programById.matchFulfilled, (state, action) => {
        state.id = action.payload.id;
        state.questionnaireUnlockTime = action.payload.questionnaire.lockedUntil ?? '';
      })
      .addMatcher(
        questionnaireApi.endpoints.answerQuestionnaire.matchFulfilled,
        (state, action) => {
          if (action.payload.questionnaire?.unlockTime) {
            state.questionnaireUnlockTime = action.payload.questionnaire?.unlockTime ?? '';
          }
        },
      );
  },
});

export const { setProgramId, unlockQuestionnaire } = programSlice.actions;

export default programSlice.reducer;
