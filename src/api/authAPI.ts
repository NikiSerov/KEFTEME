import { LogInResponse, RegistrationResponse, User} from '../types/types';
import { instance, authInstance } from "./api";
import { handleResponse } from '../utils/utils'

export const registration = async (email, firstName, lastName, password) => {
  return await handleResponse<RegistrationResponse>(instance.post("/signUp", {
    email,
    firstName,
    lastName,
    password,
  }));
};

export const logIn = async (email, password) => {
  return await handleResponse<LogInResponse>(instance.post("/login", {
    email,
    password,
  }))
};

export const getUser = async () => {
  return await handleResponse<User>(authInstance.get("/me"))
};
