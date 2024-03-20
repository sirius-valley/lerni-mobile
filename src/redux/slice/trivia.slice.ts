import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface initialStateTriviaType {
  triviaId?: string;
  program?: {
    id: string;
    name: string;
    icon: string;
    progress: number;
  };
  opponent?: {
    id: string;
    name: string;
    lastname: string;
    image: string;
  };
}

const initialState: initialStateTriviaType = {
  triviaId: undefined,
  program: undefined,
  opponent: undefined,
};

export const triviaSlice = createSlice({
  name: 'studentSlice',
  initialState,
  reducers: {
    assignTrivia: (state, action: PayloadAction<{ props: initialStateTriviaType }>) => {
      state = action.payload.props;
    },
  },
});

export const {} = triviaSlice.actions;

export default triviaSlice.reducer;
