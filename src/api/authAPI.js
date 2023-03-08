import { instance, authInstance } from "./api";

export const registartion = async (email, firstName, lastName, password) => {
  try {
    const response = await instance.post("/signUp", {
      email,
      firstName,
      lastName,
      password,
    });
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export const logIn = async (email, password) => {
  try {
    const response = await instance.post("/login", {
      email,
      password,
    });
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export const getUser = async () => {
  try {
    const response = await authInstance.get("/me");
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};
