import { Action, createAsyncThunk } from "@reduxjs/toolkit";
import { sumCalc } from "../slices/cartSlice";

export const updateCart = createAsyncThunk(
  "cart/updateCart",
  async (payload: Action, { dispatch }) => {
    await dispatch(payload);
    dispatch(sumCalc());
  }
);
