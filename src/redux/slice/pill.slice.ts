import { createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { pillsApi } from '../service/pills.service';
import { ImagesOptions, PillResponse } from '../service/types/pill.response';
import { transformResponseBlock } from './utils';

export type BubbleType =
  | 'free-text'
  | 'text'
  | 'image'
  | 'single-choice'
  | 'multiple-choice'
  | 'carousel';

export interface CommonBlockType {
  id: string;
  content?: string | string[] | number | number[] | boolean | boolean[];
}

export interface SingleChoiceBlockType extends CommonBlockType {
  type: 'single-choice';
  content?: string[];
  options: {
    id: string;
    text: string;
    selected?: boolean | string;
  }[];
  correctAnswer?: string[];
  points?: number;
}

export interface MultipleChoiceBlockType extends CommonBlockType {
  type: 'multiple-choice';
  content?: string[];
  options: {
    id: string;
    text: string;
    selected?: boolean | string;
  }[];
  correctAnswer?: string[];
  points?: number;
}

export interface TextBlockType extends CommonBlockType {
  type: 'text';
  content: string;
}

export interface ImageBlockType extends CommonBlockType {
  type: 'carousel';
  content: string;
  imgOptions?: ImagesOptions[];
  correctAnswer?: string[];
  points?: number;
  value: string;
}

export interface TextBlockType extends CommonBlockType {
  type: 'text';
  content: string;
}

export interface FreeTextBlockType extends CommonBlockType {
  type: 'free-text';
  content: string;
}

export type BlockType =
  | TextBlockType
  | SingleChoiceBlockType
  | ImageBlockType
  | MultipleChoiceBlockType
  | FreeTextBlockType;

interface initialStatePillType {
  blocksIds: string[];
  mapBlocks: Record<string, BlockType>;
  last: string | undefined;
  freeTextQuestionId?: string;
  pill?: PillResponse;
}

const initialState: initialStatePillType = {
  blocksIds: [],
  mapBlocks: {},
  last: undefined,
  freeTextQuestionId: undefined,
  pill: undefined,
};

export const pillSlice = createSlice({
  name: 'pillSlice',
  initialState,
  reducers: {
    setSingleAnswer: (state, payload) => {
      const { id, value } = payload.payload;
      const block: SingleChoiceBlockType = state.mapBlocks[id] as SingleChoiceBlockType;
      state.mapBlocks[id] = {
        ...block,
        options: block.options.map((option) => {
          if (option.id === value) {
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
      };
    },
    setMultipleAnswer: (state, payload) => {
      const { id, value } = payload.payload;
      const block = state.mapBlocks[id];

      if (block.type === 'multiple-choice') {
        state.mapBlocks[id] = {
          ...block,
          options: block.options.map((option) => {
            if (option.id === value) {
              return {
                ...option,
                selected: option?.selected === 'default' ? 'selected' : 'default',
              };
            }
            return option;
          }),
        };
      }
    },
    setFreeTextAnswer: (state, payload) => {
      const { id, value } = payload.payload;
      const block = state.mapBlocks[id];
      state.mapBlocks[id] = {
        ...block,
        content: value,
      };
    },
    setFreeTextQuestionId: (state, payload) => {
      const { id } = payload.payload;
      state.freeTextQuestionId = id;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(pillsApi.endpoints.pillById.matchFulfilled, (state, action) => {
        state.mapBlocks = action.payload.pill.bubbles.reduce((acc: any, block) => {
          state.blocksIds = [...state.blocksIds, block.id];
          return transformResponseBlock(acc, block);
        }, {});
        state.last = action.payload.pill.bubbles[action.payload.pill.bubbles.length - 1].id;
        state.pill = action.payload;
      })
      .addMatcher(pillsApi.endpoints.getIntroductionPill.matchFulfilled, (state, action) => {
        state.mapBlocks = action.payload.pill.bubbles.reduce((acc: any, block) => {
          state.blocksIds = [...state.blocksIds, block.id];
          return transformResponseBlock(acc, block);
        }, {});
        state.last = action.payload.pill.bubbles[action.payload.pill.bubbles.length - 1].id;
        state.pill = action.payload;
      })
      .addMatcher(pillsApi.endpoints.answer.matchFulfilled, (state, action) => {
        state.freeTextQuestionId = undefined;
        const blocksToAdd = action.payload.pill.bubbles.reduce((acc: any, block) => {
          state.blocksIds = [...state.blocksIds, block.id];
          return transformResponseBlock(acc, block);
        }, {});

        state.mapBlocks = {
          ...state.mapBlocks,
          ...blocksToAdd,
        };
        if (action.payload.pill?.bubbles.length > 0) {
          state.last = action.payload.pill?.bubbles[action.payload.pill.bubbles.length - 1]?.id;
        }
        state.pill = {
          ...state.pill,
          pill: {
            ...action.payload.pill,
          },
        };
      });
  },
});

const mapBlocks: any = (state: RootState) => state.pill.mapBlocks;

export const getPillByID = createSelector(
  [mapBlocks, (values, props: { id: string }) => props],
  (values, props) => {
    return values[props.id];
  },
);

export const getPillTypeByID = createSelector(
  [mapBlocks, (values, props: { id: string }) => props],
  (values, props) => {
    return values[props.id]?.type;
  },
);

export const { setSingleAnswer, setMultipleAnswer, setFreeTextAnswer, setFreeTextQuestionId } =
  pillSlice.actions;

export default pillSlice.reducer;
