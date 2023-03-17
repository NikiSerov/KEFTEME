import { createSlice } from "@reduxjs/toolkit";
import { setProductsThunk } from "../thunks/productsThunk";

const initialState = {
  products: [],
  loading: true,
  total: 0,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, { payload }) {
      state.products = payload.data;
      state.total = payload.total;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setProductsThunk.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(setProductsThunk.pending, (state) => {
      state.loading = true;
    });
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
