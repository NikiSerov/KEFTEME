import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: [], sum: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, { payload }) {
      if (!state.products.find((product) => product.id === payload.id)) {
        state.products.push({ ...payload, quantity: 1 });
        state.sum += Number(payload.price);
      }
    },
    deleteProduct(state, { id }) {
      state.products.filter((product) => product.id !== id);
    },
  },
});

export const { addProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
