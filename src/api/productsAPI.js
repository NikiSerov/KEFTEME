import { defaultLimit } from "../constants/constants";
import { instance } from "./api";

export const getProducts = async (queryString = "") => {
  const response = await instance.get(`/products/?${queryString}`);
  return response.data;
};

export const getProduct = async (id) => {
  const response = await instance.get(`/products/${id}`);
  return response.data;
};

export const getColors = async () => {
  const response = await instance.get("/colors");
  return response.data;
};

export const getTypes = async () => {
  const response = await instance.get("/types");
  return response.data;
};

export const getSizes = async () => {
  const response = await instance.get("/sizes");
  return response.data;
};
