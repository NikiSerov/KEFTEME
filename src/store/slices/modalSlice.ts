import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  title: string;
  modalText: string;
  type: string;
  isShowed: boolean,
}

const initialState: ModalState = {
  title: '',
  isShowed: false,
  modalText: '',
  type: '',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal(state, { payload }: PayloadAction<Omit<ModalState, "isShowed">>) {
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
