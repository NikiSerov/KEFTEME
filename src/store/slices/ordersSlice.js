import { createSlice } from "@reduxjs/toolkit";
import { createOrderThunk } from "../thunks/orderThunks";

const initialState = { orders: [], processing: false };

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders(state, { payload: orders }) {
      state.orders = orders;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createOrderThunk.pending, (state) => {
      state.processing = true;
    });
    builder.addCase(createOrderThunk.fulfilled, (state) => {
      state.processing = false;
    });
    builder.addCase(createOrderThunk.rejected, (state) => {
      state.processing = false;
    });
  },
});

export const { setOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
