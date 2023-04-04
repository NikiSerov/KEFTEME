import { createAsyncThunk } from "@reduxjs/toolkit";
import { createOrder, getOrders } from "../../api/ordersAPI";
import { Cart } from "../../types/types";
import { clearCart } from "../slices/cartSlice";
import { showModal } from "../slices/modalSlice";
import { setOrders } from "../slices/ordersSlice";

export const createOrderThunk = createAsyncThunk(
  "orders/createOrder",
  async (cart: Cart, { dispatch }) => {
    const order = {
      products: cart.products.map(({ id, quantity }) => {
        return {
          productId: id,
          quantity,
        };
      }),
      sum: cart.sum,
    };
    try {
      await createOrder(order);
      dispatch(clearCart());
      return true;
    } catch (error) {
      dispatch(
        showModal({
          title: "Order error",
          modalText:
            "An error occurred while processing your order. Please try again",
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
    const [response] = await getOrders();
    dispatch(setOrders(response));
  }
);
