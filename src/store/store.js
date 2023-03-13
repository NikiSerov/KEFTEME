import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice";
import modalReducer from "./slices/modalSlice";
import ordersReducer from "./slices/ordersSlice";
import { cartListenerMiddleware } from "./middleware/cartListenerMiddleware";

const preloadedState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : { products: [], sum: 0 },
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    modal: modalReducer,
    orders: ordersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartListenerMiddleware),
  preloadedState,
});
