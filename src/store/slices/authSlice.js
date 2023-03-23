import { createSlice } from "@reduxjs/toolkit";
import { logInThunk, registerThunk } from "../thunks/userThunks";

const initialState = {
  logged: false,
  user: null,
  loading: true,
  processing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.logged = true;
      state.user = payload;
      state.loading = false;
    },
    logOutUser() {
      localStorage.removeItem("keftemeToken");
      return {
        ...initialState,
        loading: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logInThunk.pending, (state) => {
      state.processing = true;
    });
    builder.addCase(logInThunk.fulfilled, (state) => {
      state.processing = false;
    });
    builder.addCase(logInThunk.rejected, (state) => {
      state.processing = false;
    });
    builder.addCase(registerThunk.pending, (state) => {
      state.processing = true;
    });
    builder.addCase(registerThunk.fulfilled, (state) => {
      state.processing = false;
    });
    builder.addCase(registerThunk.rejected, (state) => {
      state.processing = false;
    });
  },
});

export const { setUser, logOutUser } = authSlice.actions;
export default authSlice.reducer;
