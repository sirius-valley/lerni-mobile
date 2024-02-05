import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface initialStateStudentType {
  id: string | undefined;
  name: string | undefined;
  lastname: string | undefined;
  city: string | undefined;
  profession: string | undefined;
  career: string | undefined;
  image: string | undefined;
  hasCompletedIntroduction: boolean;
}

const initialState: initialStateStudentType = {
  id: undefined,
  name: undefined,
  lastname: undefined,
  city: undefined,
  profession: undefined,
  career: undefined,
  image: undefined,
  hasCompletedIntroduction: false,
};

export const studentSlice = createSlice({
  name: 'studentSlice',
  initialState,
  reducers: {
    me: (state, action: PayloadAction<{ props: initialStateStudentType }>) => {
      state = action.payload.props;
    },
  },
});

export const { me } = studentSlice.actions;

export default studentSlice.reducer;
