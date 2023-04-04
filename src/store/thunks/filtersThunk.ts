import { createAsyncThunk } from "@reduxjs/toolkit";
import { getColors, getTypes, getSizes } from "../../api/productsAPI";
import { Filters } from "../../types/types";
import { setFilters } from "../slices/filtersSlice";

export const setFiltersThunk = createAsyncThunk(
  "filters/getFilters",
  async (_, { dispatch }) => {
    const colors = await getColors();
    const sizes = await getSizes();
    const types = await getTypes();
    
    const filters: Filters = {
      colors: colors[0],
      sizes: sizes[0],
      types: types[0],
    };

    dispatch(setFilters(filters));
  }
);
