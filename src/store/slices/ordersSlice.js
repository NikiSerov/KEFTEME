import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders(state, { payload: orders }) {
      state = orders;
      return orders;
    },
  },
});

export const { setOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
