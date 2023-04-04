import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from '../../api/productsAPI';
import { setProducts } from '../slices/productsSlice';

export const setProductsThunk = createAsyncThunk(
  'products/getProducts',
  async (queryStr: string, { dispatch }) => {
    const [products] = await getProducts(queryStr);
    dispatch(setProducts(products));
  },
);
