import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order } from "../../types/types";
import { createOrderThunk } from "../thunks/orderThunks";

interface OrdersState {
  orders: Order[];
  processing: boolean;
}

const initialState: OrdersState = { orders: [], processing: false };

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders(state, { payload: orders }: PayloadAction<Order[]>) {
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
