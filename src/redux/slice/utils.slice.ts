import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ToastTypes } from '../../utils/constants';
import { ModalTypeEnum } from '../../utils/utils';

export interface initialStateUtilsType {
  type?: 'success' | 'error' | 'info';
  text?: string;
  modalType?: ModalTypeEnum;
}

const initialState: initialStateUtilsType = {
  type: undefined,
  modalType: undefined,
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
    setModalOpen: (state, action) => {
      state.modalType = action.payload?.modalType;
    },
    closeModal: (state) => {
      return initialState;
    },
  },
});

export const { showToast, resetToast, setModalOpen, closeModal } = utilsSlice.actions;

export default utilsSlice.reducer;
