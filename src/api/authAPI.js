import { instance, authInstance } from "./api";
import { handleResponse } from '../utils/utils'

export const registration = async (email, firstName, lastName, password) => {
  return await handleResponse(instance.post("/signUp", {
    email,
    firstName,
    lastName,
    password,
  }));
};

export const logIn = async (email, password) => {
  return await handleResponse(instance.post("/login", {
    email,
    password,
  }))
};

export const getUser = async () => {
  return await handleResponse(authInstance.get("/me"))
};
