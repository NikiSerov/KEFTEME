import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders(_, { payload: orders }) {
      return orders;
    },
  },
});

export const { setOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
