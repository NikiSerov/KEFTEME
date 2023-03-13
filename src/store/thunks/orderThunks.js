import { createAsyncThunk } from "@reduxjs/toolkit";
import { createOrder, getOrders } from "../../api/ordersAPI";
import { clearCart } from "../slices/cartSlice";
import { showModal } from "../slices/modalSlice";
import { setOrders } from "../slices/ordersSlice";

export const createOrderThunk = createAsyncThunk(
  "orders/createOrder",
  async ({ cart }, { dispatch }) => {
    const response = await createOrder(cart);
    if (response.statusCode === 200) {
      dispatch(
        showModal({
          title: "Order placed successfully!",
          modalText: "Thank you for your order!",
          type: "success",
        })
      );
      dispatch(clearCart());
      return true;
    } else {
      dispatch(
        showModal({
          title: "Order error",
          modalText: response.message,
          type: "error",
        })
      );
      return false;
    }
  }
);

export const getOrdersThunk = createAsyncThunk(
  "orders/getOrders",
  async (_, { dispatch }) => {
    const response = await getOrders();
    dispatch(setOrders(response));
  }
);
