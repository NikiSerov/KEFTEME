import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setProductsThunk } from '../thunks/productsThunk';
import { ProductsResponse, Product } from '../../types/types';

interface ProductsState {
  products: Product[] | [];
  loading: boolean;
  total: number;
}

const initialState: ProductsState = {
  products: [],
  loading: true,
  total: 0,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, { payload }: PayloadAction<ProductsResponse>) {
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
