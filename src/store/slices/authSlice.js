import { createSlice } from "@reduxjs/toolkit";

const initialState = { logged: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.logged = true;
      state.user = payload;
    },
    logOutUser() {
      return initialState;
    },
  },
});

export const { setUser, logOutUser } = authSlice.actions;
export default authSlice.reducer;
