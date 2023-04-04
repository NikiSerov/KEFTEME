import { defaultLimit } from "../constants/constants";
import { Color, ProductsResponse, Product, Shoetype, Size } from "../types/types";
import { handleResponse } from "../utils/utils";
import { instance } from "./api";

export const getProducts = async (queryString: string | undefined = "") => {
  const qs: string = queryString ? `&${queryString}` : queryString;
  return await handleResponse<ProductsResponse>(instance.get(`/products/?limit=${defaultLimit}${qs}`));
};

export const getProduct = async (id: number) => {
  return await handleResponse<Product>(instance.get(`/products/${id}`));
};

export const getColors = async ()=> {
  return await handleResponse<Color[]>(instance.get("/colors"));
};

export const getTypes = async () => {
  return await handleResponse<Shoetype[]>(instance.get("/types"));
};

export const getSizes = async () => {
  return await handleResponse<Size[]>(instance.get("/sizes"));
};
