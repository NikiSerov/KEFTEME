import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: [], sum: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, { payload }) {
      if (!state.products.find((product) => product.id === payload.id)) {
        state.products.push({ ...payload, quantity: 1 });
        state.sum = +(state.sum + payload.price);
        state.sum = +state.sum.toFixed(2);
      }
    },
    deleteProduct(state, { payload }) {
      state.products.filter((product) => product.id !== payload.id);
    },
    quantityIncr(state, { payload }) {
      const product = state.products.find(
        (product) => product.id === payload.id
      );
      product.quantity += 1;
    },
    quantityDecr(state, { payload }) {
      const product = state.products.find(
        (product) => product.id === payload.id
      );
      if (product.quantity >= 0) {
        product.quantity -= 1;
      } else {
        state.products.filter((product) => product.id !== payload.id);
      }
    },
  },
});

export const { addProduct, deleteProduct, quantityIncr, quantityDecr } =
  cartSlice.actions;
export default cartSlice.reducer;
