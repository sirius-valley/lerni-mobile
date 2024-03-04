import { createSelector, createSlice } from '@reduxjs/toolkit';
import {
  BlockType,
  ImageBlockType,
  MultipleChoiceBlockType,
  SingleChoiceBlockType,
} from './pill.slice';
import { transformQuestionnaireResponseBlock } from './utils';
import { RootState } from '../store';
import { questionnaireApi } from '../service/questionnaire.service';
import { QuestionnaireResponse } from '../service/types/questionnaire.response';

interface InitialStateQuestionnaireType {
  blocksIds: string[];
  mapBlocks: Record<string, BlockType>;
  last: string | undefined;
  freeTextQuestionId?: string;
  questionnaire?: QuestionnaireResponse;
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
    // getQuestionnaireById: (state, action) => {
    //   state.mapBlocks = questionnaireResponseMockedData.pill.bubbles.reduce((acc: any, block) => {
    //     state.blocksIds = [...state.blocksIds, block.id];
    //     return transformQuestionnaireResponseBlock(acc, block);
    //   }, {});
    //   state.last =
    //     questionnaireResponseMockedData.pill.bubbles[
    //       questionnaireResponseMockedData.pill.bubbles.length - 1
    //     ].id;
    //   state.questionnaire = questionnaireResponseMockedData;
    // },
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

      // if (block.type === 'carousel') {
      //   state.mapBlocks[id] = {
      //     ...block,
      //     imgOptions: block.imgOptions?.map((option) => {
      //       return {
      //         ...option,
      //         selected: option.id === value ? true : false,
      //       };
      //     }),
      //   };
      // }
    },
    sendImageSelected: (state, action) => {
      const paylou = action.payload;
      // REMOVE THIS REDUCER
      // state.mapBlocks[carouselBlock.id] = {
      //   ...state.mapBlocks,
      //   ...carouselBlock,
      //   points: 5,
      //   value: carouselBlock.correctAnswer[0] ?? '',
      // };
    },
    // nextQuestion: (state, action) => {
    //   if (state.mapBlocks[state.last ?? '']?.type === 'single-choice') {
    //     const mappedValues = questionnaireMultipleMessage.map((q) => ({
    //       ...q,
    //       id: `${Math.random()}`,
    //     }));
    //     const newBlocks = mappedValues.reduce((acc: any, block) => {
    //       state.blocksIds = [...state.blocksIds, block.id];
    //       return transformQuestionnaireResponseBlock(acc, block);
    //     }, {});
    //     state.mapBlocks = {
    //       ...state.mapBlocks,
    //       ...newBlocks,
    //     };
    //     state.last = mappedValues[mappedValues.length - 1].id;
    //     state.questionnaire?.pill.bubbles.concat(questionnaireEndMessage);
    //   } else if (state.mapBlocks[state.last ?? '']?.type === 'multiple-choice') {
    //     const mappedValues = questionnaireImgSelectionMessage.map((q) => ({
    //       ...q,
    //       id: `${Math.random()}`,
    //     }));
    //     const newBlocks = mappedValues.reduce((acc: any, block) => {
    //       state.blocksIds = [...state.blocksIds, block.id];
    //       return transformQuestionnaireResponseBlock(acc, block);
    //     }, {});
    //     state.mapBlocks = {
    //       ...state.mapBlocks,
    //       ...newBlocks,
    //     };
    //     state.last = mappedValues[mappedValues.length - 1].id;
    //     state.questionnaire?.pill.bubbles.concat(questionnaireEndMessage);
    //   } else {
    //     const mappedValues = questionnaireEndMessage.map((q) => ({ ...q, id: `${Math.random()}` }));
    //     const newBlocks = mappedValues.reduce((acc: any, block) => {
    //       state.blocksIds = [...state.blocksIds, block.id];
    //       return transformQuestionnaireResponseBlock(acc, block);
    //     }, {});
    //     state.mapBlocks = {
    //       ...state.mapBlocks,
    //       ...newBlocks,
    //     };
    //     state.last = mappedValues[mappedValues.length - 1].id;
    //     state.questionnaire?.pill.bubbles.concat(questionnaireEndMessage);
    //   }
    // },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(questionnaireApi.endpoints.questionnaireById.matchFulfilled, (state, action) => {
        state.mapBlocks = action.payload.questionnaire.bubbles.reduce((acc: any, block) => {
          state.blocksIds = [...state.blocksIds, block.id];
          return transformQuestionnaireResponseBlock(acc, block);
        }, {});
        state.last =
          action.payload.questionnaire.bubbles[action.payload.questionnaire.bubbles.length - 1].id;
        state.questionnaire = action.payload;
      })
      .addMatcher(
        questionnaireApi.endpoints.answerQuestionnaire.matchFulfilled,
        (state, action) => {
          const lastQuestionId = state.last as string;
          const blocksToAdd = action.payload.questionnaire.bubbles.reduce((acc: any, block) => {
            state.blocksIds = [...state.blocksIds, block.id];
            return transformQuestionnaireResponseBlock(acc, block);
          }, {});

          state.mapBlocks = {
            ...state.mapBlocks,
            ...blocksToAdd,
          };
          if (action.payload.questionnaire?.bubbles.length > 0) {
            state.last =
              action.payload.questionnaire.bubbles[
                action.payload.questionnaire.bubbles.length - 1
              ].id;
          }
          state.questionnaire = action.payload;

          // Set properties to the answered bubble
          let lastBlock = state.mapBlocks[lastQuestionId];
          if (['single-choice', 'multiple-choice'].includes(lastBlock.type)) {
            lastBlock = {
              ...lastBlock,
              pointsAwarded: action.payload.questionnaire.pointsAwarded,
              correctAnswer: action.payload.questionnaire.correctValue,
              correct: action.payload.questionnaire.correct,
            };
            state.mapBlocks[lastQuestionId] = lastBlock;
          }
        },
      );
  },
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
  // getQuestionnaireById,
  setSingleAnswer,
  handleImageSelectionChange,
  // nextQuestion,
  handleMultipleAnswerChange,
  sendMultipleAnswer,
  sendImageSelected,
} = questionnaireSlice.actions;

export default questionnaireSlice.reducer;
