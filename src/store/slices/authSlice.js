import { createSlice } from "@reduxjs/toolkit";

const initialState = { logged: false, user: null, loading: true };

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
});

export const { setUser, logOutUser } = authSlice.actions;
export default authSlice.reducer;
