import { createSelector, createSlice } from '@reduxjs/toolkit';
import { PillResponse } from '../service/types/pill.response';
import {
  BlockType,
  ImageBlockType,
  MultipleChoiceBlockType,
  SingleChoiceBlockType,
} from './pill.slice';
import { transformQuestionnaireResponseBlock } from './utils';
import {
  questionnaireEndMessage,
  questionnaireImgSelectionMessage,
  questionnaireMultipleMessage,
  questionnaireResponseMockedData,
} from '../../utils/questionnaireUtils';
import { RootState } from '../store';

interface InitialStateQuestionnaireType {
  blocksIds: string[];
  mapBlocks: Record<string, BlockType>;
  last: string | undefined;
  freeTextQuestionId?: string;
  questionnaire?: PillResponse;
}

const initialState: InitialStateQuestionnaireType = {
  blocksIds: [],
  mapBlocks: {},
  last: undefined,
  freeTextQuestionId: undefined,
  questionnaire: undefined,
};

export const questionnaireSlice = createSlice({
  name: 'questionnaireSlice',
  initialState,
  reducers: {
    getQuestionnaireById: (state, action) => {
      state.mapBlocks = questionnaireResponseMockedData.pill.bubbles.reduce((acc: any, block) => {
        state.blocksIds = [...state.blocksIds, block.id];
        return transformQuestionnaireResponseBlock(acc, block);
      }, {});
      state.last =
        questionnaireResponseMockedData.pill.bubbles[
          questionnaireResponseMockedData.pill.bubbles.length - 1
        ].id;
      state.questionnaire = questionnaireResponseMockedData;
    },
    setSingleAnswer: (state, action) => {
      const { id, value } = action.payload;
      const block: SingleChoiceBlockType = state.mapBlocks[id] as SingleChoiceBlockType;
      let pointsToAssign = 0;

      state.mapBlocks[id] = {
        ...block,
        options: block.options.map((option) => {
          if (option.id === value) {
            pointsToAssign = block.correctAnswer?.includes(option.id) ? 5 : 0;
            return {
              ...option,
              selected: true,
            };
          }
          return {
            ...option,
            selected: false,
          };
        }),
        points: pointsToAssign,
      };
    },
    handleMultipleAnswerChange: (state, action) => {
      const { id, value } = action.payload;
      const block = state.mapBlocks[id];

      if (block.type === 'multiple-choice') {
        state.mapBlocks[id] = {
          ...block,
          options: block.options.map((option) => {
            if (option.id === value) {
              return {
                ...option,
                selected: option?.selected === false ? true : false,
              };
            }
            return option;
          }),
        };
      }
    },
    sendMultipleAnswer: (state, action) => {
      const { id } = action.payload;
      const block: MultipleChoiceBlockType = state.mapBlocks[id] as MultipleChoiceBlockType;

      const correactAnswersAmount = block.correctAnswer!.length;
      let correctAnswersCount = 0;

      if (block.type === 'multiple-choice') {
        block.options.forEach((option) => {
          if (option.selected && block.correctAnswer?.includes(option.id)) correctAnswersCount++;
        });

        state.mapBlocks[id] = {
          ...block,
          points: correctAnswersCount === correactAnswersAmount ? 5 : 0,
        };
      }
    },
    handleImageSelectionChange: (state, action) => {
      const { id, value } = action.payload;
      const block = state.mapBlocks[id];

      if (block.type === 'carousel') {
        state.mapBlocks[id] = {
          ...block,
          imgOptions: block.imgOptions?.map((option) => {
            return {
              ...option,
              selected: option.id === value ? true : false,
            };
          }),
        };
      }
    },
    sendImageSelected: (state, action) => {
      const { id } = action.payload;
      const block: ImageBlockType = state.mapBlocks[id] as ImageBlockType;

      let value = '';

      if (block.type === 'carousel') {
        block.imgOptions?.forEach((option) => {
          if (option.selected && block.correctAnswer?.includes(option.image)) value = option.image;
        });

        state.mapBlocks[id] = {
          ...block,
          points: value ? 5 : 0,
          value: value,
        };
      }
    },
    nextQuestion: (state, action) => {
      if (state.mapBlocks[state.last ?? '']?.type === 'single-choice') {
        const mappedValues = questionnaireMultipleMessage.map((q) => ({
          ...q,
          id: `${Math.random()}`,
        }));
        const newBlocks = mappedValues.reduce((acc: any, block) => {
          state.blocksIds = [...state.blocksIds, block.id];
          return transformQuestionnaireResponseBlock(acc, block);
        }, {});
        state.mapBlocks = {
          ...state.mapBlocks,
          ...newBlocks,
        };
        state.last = mappedValues[mappedValues.length - 1].id;
        state.questionnaire?.pill.bubbles.concat(questionnaireEndMessage);
      } else if (state.mapBlocks[state.last ?? '']?.type === 'multiple-choice') {
        const mappedValues = questionnaireImgSelectionMessage.map((q) => ({
          ...q,
          id: `${Math.random()}`,
        }));
        const newBlocks = mappedValues.reduce((acc: any, block) => {
          state.blocksIds = [...state.blocksIds, block.id];
          return transformQuestionnaireResponseBlock(acc, block);
        }, {});
        state.mapBlocks = {
          ...state.mapBlocks,
          ...newBlocks,
        };
        state.last = mappedValues[mappedValues.length - 1].id;
        state.questionnaire?.pill.bubbles.concat(questionnaireEndMessage);
      } else {
        const mappedValues = questionnaireEndMessage.map((q) => ({ ...q, id: `${Math.random()}` }));
        const newBlocks = mappedValues.reduce((acc: any, block) => {
          state.blocksIds = [...state.blocksIds, block.id];
          return transformQuestionnaireResponseBlock(acc, block);
        }, {});
        state.mapBlocks = {
          ...state.mapBlocks,
          ...newBlocks,
        };
        state.last = mappedValues[mappedValues.length - 1].id;
        state.questionnaire?.pill.bubbles.concat(questionnaireEndMessage);
      }
    },
  },
  extraReducers: (builder) => {},
});

const mapBlocks: any = (state: RootState) => state.questionnaire.mapBlocks;

export const getQuestionnaireByID = createSelector(
  [mapBlocks, (values, props: { id: string }) => props],
  (values, props) => {
    return values[props.id];
  },
);

export const getQuestionnaireTypeByID = createSelector(
  [mapBlocks, (values, props: { id: string }) => props],
  (values, props) => {
    return values[props.id]?.type;
  },
);

export const {
  getQuestionnaireById,
  setSingleAnswer,
  nextQuestion,
  handleMultipleAnswerChange,
  sendMultipleAnswer,
  handleImageSelectionChange,
  sendImageSelected,
} = questionnaireSlice.actions;

export default questionnaireSlice.reducer;
