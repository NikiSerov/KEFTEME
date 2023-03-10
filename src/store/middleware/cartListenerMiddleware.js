export const cartListenerMiddleware =
  ({ getState }) =>
  (next) =>
  (action) => {
    const result = next(action);
    if (action.type.startsWith("cart/")) {
      localStorage.setItem("cart", JSON.stringify(getState().cart));
    }
    return result;
  };
