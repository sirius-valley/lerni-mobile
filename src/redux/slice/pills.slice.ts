import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ToastTypes } from '../../utils/constants';

export interface initialStateHomeType {
  type?: 'success' | 'error' | 'info';
  text?: string;
}

const initialState: initialStateHomeType = {
  type: undefined,
};

export const utilsSlice = createSlice({
  name: 'utilsSlice',
  initialState,
  reducers: {
    showToast: (state, action: PayloadAction<{ type: ToastTypes; text?: string }>) => {
      state.type = action.payload.type;
      state.text = action.payload?.text;
    },
    resetToast: (state) => {
      state.type = undefined;
      state.text = undefined;
    },
  },
});

export const { showToast, resetToast } = utilsSlice.actions;

export default utilsSlice.reducer;
