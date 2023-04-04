import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filters } from "../../types/types";

interface FiltersState {
  filters: Filters | null;
  loading: boolean;
};

const initialState: FiltersState = {
  filters: null,
  loading: true,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters(state, { payload }: PayloadAction<Filters>) {
      state.filters = payload;
      state.loading = false;
    },
  },
});

export const { setFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
