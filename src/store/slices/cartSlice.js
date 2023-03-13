import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: [], sum: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, { payload: currProduct }) {
      if (!state.products.find((product) => product.id === currProduct.id)) {
        state.products.push({ ...currProduct, quantity: 1 });
      }
    },
    deleteProduct(state, { payload: id }) {
      state.products = state.products.filter((product) => product.id !== id);
    },
    quantityIncr(state, { payload: id }) {
      const product = state.products.find((product) => product.id === id);
      product.quantity += 1;
    },
    quantityDecr(state, { payload: id }) {
      const product = state.products.find((product) => product.id === id);
      product.quantity -= 1;
    },
    sumCalc(state) {
      const sum = state.products.reduce((acc, { price, quantity }) => {
        return acc + price * quantity;
      }, 0);
      state.sum = +sum.toFixed(2);
    },
    clearCart() {
      return initialState;
    },
  },
});

export const {
  addProduct,
  deleteProduct,
  quantityIncr,
  quantityDecr,
  sumCalc,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
