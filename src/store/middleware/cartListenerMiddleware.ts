import { Middleware } from '@reduxjs/toolkit';
import { RootState } from '../store';

const cartListenerMiddleware: Middleware<{}, RootState> =
  ({ getState }) =>
  (next) =>
  (action) => {
    const result = next(action);
    if (action.type.startsWith("cart/")) {
      localStorage.setItem("cart", JSON.stringify(getState().cart));
    }
    return result;
  };

export {cartListenerMiddleware}