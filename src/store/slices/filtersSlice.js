import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: null,
  loading: true,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters(state, { payload }) {
      state.filters = payload;
      state.loading = false;
    },
  },
});

export const { setFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
