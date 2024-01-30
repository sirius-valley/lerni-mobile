import { createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { pillsApi } from '../service/pills.service';
import { PillResponse } from '../service/types/pill.response';
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
}

export interface MultipleChoiceBlockType extends CommonBlockType {
  type: 'multiple-choice';
  content?: string[];
  options: {
    id: string;
    text: string;
    selected?: boolean | string;
  }[];
}

export interface TextBlockType extends CommonBlockType {
  type: 'text';
  content: string;
}

export interface ImageBlockType extends CommonBlockType {
  type: 'image';
  content: string;
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
  // blocksIds: ['1','2','3','4','5','6'],
  // mapBlocks: {
  //     "1": {
  //         "id": "1",
  //         "type": "text",
  //         "content": "Hola, soy el bot de OncoLife, "
  //     },
  //     "2": {
  //         "id": "2",
  //         "type": "text",
  //         "content": "¿Cómo te llamas?"
  //     },
  //     "3": {
  //         "id": "3",
  //         "type": "single-choice",
  //         "options": [
  //             {
  //                 "id": "1",
  //                 "text": "Opción 1"
  //             },
  //             {
  //                 "id": "2",
  //                 "text": "Opción 2"
  //             },
  //             {
  //                 "id": "3",
  //                 "text": "Opción 3"
  //             }
  //         ]
  //     },
  //     "4": {
  //         "id": "4",
  //         "type": "text",
  //         "content": "¿Cuál es tu edad?"
  //     },
  //     "5": {
  //         "id": "5",
  //         "type": "image",
  //         "content": "https://statics-cuidateplus.marca.com/cms/2023-02/edad-cerebral.jpg"
  //     },
  //     "6": {
  //         "id": "6",
  //         "type": "multiple-choice",
  //         "options": [
  //             {
  //                 "id": "1",
  //                 "text": "Menor a 12"
  //             },
  //             {
  //                 "id": "2",
  //                 "text": "18 o más"
  //             },
  //             {
  //                 "id": "3",
  //                 "text": "Prefiero no decirlo"
  //             }
  //         ]
  //     }
  // },
  // last: undefined
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
              selected: option?.selected === 'default' ? true : 'default',
            };
          }
          return {
            ...option,
            selected: 'not_selected',
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
    sendAnswer: (state, payload) => {
      const newBlocks = [
        {
          id: '7',
          type: 'text',
          value: '¿Cuál es tu género?',
        },
        {
          id: '8',
          type: 'single-choice',
          value: undefined,
          options: [
            {
              id: '1',
              text: 'Hombre',
              selected: undefined,
            },
            {
              id: '2',
              text: 'Mujer',
              selected: undefined,
            },
            {
              id: '3',
              text: 'Prefiero no decirlo',
              selected: undefined,
            },
          ],
        },
      ];
      state.blocksIds = [...state.blocksIds, ...newBlocks.map((block) => block.id)];
      state.mapBlocks = {
        ...state.mapBlocks,
        ...newBlocks.reduce(
          (acc: any, block) => ({
            ...acc,
            [block.id]: block,
          }),
          {},
        ),
      };
      state.last = newBlocks[newBlocks.length - 1].id;
    },
  },
  extraReducers: (builder) => {
    builder
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
        state.last = action.payload.pill.bubbles[action.payload.pill.bubbles.length - 1].id;
        state.pill = action.payload;
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

export const {
  sendAnswer,
  setSingleAnswer,
  setMultipleAnswer,
  setFreeTextAnswer,
  setFreeTextQuestionId,
} = pillSlice.actions;

export default pillSlice.reducer;
