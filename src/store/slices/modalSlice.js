import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  isShowed: false,
  modalText: '',
  type: '',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal(state, { payload }) {
      state.isShowed = true;
      state.title = payload.title;
      state.type = payload.type;
      state.modalText = payload.modalText;
    },
    resetModal() {
      return initialState;
    },
  },
});

export const { showModal, resetModal } = modalSlice.actions;
export default modalSlice.reducer;
