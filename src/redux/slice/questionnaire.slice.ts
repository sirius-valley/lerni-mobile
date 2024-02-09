import { createSlice } from '@reduxjs/toolkit';
import { PillResponse } from '../service/types/pill.response';
import { BlockType } from './pill.slice';
import { transformResponseBlock } from './utils';
import { questionnaireResponseMockedData } from '../../utils/questionnaireUtils';

interface InitialStateQuestionnaireType {
  blocksIds: string[];
  mapBlocks: Record<string, BlockType>;
  last: string | undefined;
  freeTextQuestionId?: string;
  pill?: PillResponse;
}

const initialState: InitialStateQuestionnaireType = {
  blocksIds: [],
  mapBlocks: {},
  last: undefined,
  freeTextQuestionId: undefined,
  pill: undefined,
};

export const questionnaireSlice = createSlice({
  name: 'questionnaireSlice',
  initialState,
  reducers: {
    getQuestionnaireById: (state, action) => {
      state.mapBlocks = questionnaireResponseMockedData.reduce((acc: any, block) => {
        state.blocksIds = [...state.blocksIds, block.id];
        return transformResponseBlock(acc, block);
      }, {});
      console.log('questionnaireResponseMockedData: ', questionnaireResponseMockedData);
      console.log('state.mapBlocks: ', state.mapBlocks);
      state.last = questionnaireResponseMockedData[questionnaireResponseMockedData.length - 1].id;
      state.pill = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { getQuestionnaireById } = questionnaireSlice.actions;

export default questionnaireSlice.reducer;
