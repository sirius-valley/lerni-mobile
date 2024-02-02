import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { logout } from './auth.slice';

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
  extraReducers(builder) {
    builder.addCase(logout, (state) => {
      state.id = undefined;
      state.name = undefined;
      state.lastname = undefined;
      state.city = undefined;
      state.profession = undefined;
      state.career = undefined;
      state.image = undefined;
      state.hasCompletedIntroduction = false;
    });
  },
});

export const { me } = studentSlice.actions;

export default studentSlice.reducer;
