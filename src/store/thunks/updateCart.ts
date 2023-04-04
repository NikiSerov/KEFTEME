import { AnyAction, createAsyncThunk } from "@reduxjs/toolkit";
import { sumCalc } from "../slices/cartSlice";

export const updateCart = createAsyncThunk(
  "cart/updateCart",
  async (payload: AnyAction, { dispatch }) => {
    await dispatch(payload);
    dispatch(sumCalc());
  }
);
