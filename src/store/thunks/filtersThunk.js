import { createAsyncThunk } from "@reduxjs/toolkit";
import { getColors, getTypes, getSizes } from "../../api/productsAPI";
import { setFilters } from "../slices/filtersSlice";

export const setFiltersThunk = createAsyncThunk(
  "filters/getFilters",
  async (_, { dispatch }) => {
    const [colors, sizes, types] = await Promise.allSettled([
      getColors(),
      getSizes(),
      getTypes(),
    ]);
    const filters = {
      colors: colors.value,
      sizes: sizes.value,
      types: types.value,
    };

    dispatch(setFilters(filters));
  }
);
