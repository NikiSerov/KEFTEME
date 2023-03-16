import { createSlice } from "@reduxjs/toolkit";
import { setFiltersThunk } from "../thunks/filtersThunk";

const initialState = {
  filters: {},
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
