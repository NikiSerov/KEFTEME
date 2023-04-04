import { CreateOrderResponse, Order } from "../types/types";
import { handleResponse } from "../utils/utils";
import { authInstance } from "./api";

export const createOrder = async (order) => {
  return await handleResponse<CreateOrderResponse>(authInstance.post("/orders", { ...order }))
};

export const getOrders = async () => {
  return await handleResponse<Order[]>(authInstance.get("/orders"));
};
