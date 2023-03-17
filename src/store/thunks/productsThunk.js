import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../../api/productsAPI";
import { setProducts } from "../slices/productsSlice";

export const setProductsThunk = createAsyncThunk(
  "products/getProducts",
  async (queryStr, { dispatch }) => {
    const response = await getProducts(queryStr);
    dispatch(setProducts(response));
  }
);
