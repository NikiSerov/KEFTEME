import { authInstance } from "./api";

export const createOrder = async (order) => {
  const response = await authInstance.post("/orders", { 1: "1" });
  return response.data;
};

export const getOrders = async () => {
  const response = await authInstance.get("/orders");
  return response.data;
};
