import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUser, logIn, registartion } from "../../api/authAPI";
import { logOutUser, setUser } from "../slices/authSlice";
import { LS_TOKEN_KEY } from "../../constants/constants";
import { showModal } from "../slices/modalSlice";
import { getOrdersThunk } from "./orderThunks";

export const logInThunk = createAsyncThunk(
  "auth/logIn",
  async ({ email, password }, { dispatch }) => {
    const response = await logIn(email, password);
    if (response.access_token) {
      dispatch(setUser(response.user));
      localStorage.setItem(LS_TOKEN_KEY, response.access_token);
    } else {
      dispatch(
        showModal({
          title: "Login error",
          modalText: response.message,
          type: "error",
        })
      );
    }
  }
);

export const registerThunk = createAsyncThunk(
  "auth/register",
  async ({ email, firstName, lastName, password }, { dispatch }) => {
    const response = await registartion(email, firstName, lastName, password);
    if (response.statusCode === 200) {
      dispatch(
        showModal({
          title: "Success!",
          modalText:
            "You have successfully registered! Please log in to your account.",
          type: "success",
        })
      );
      return true;
    } else {
      dispatch(
        showModal({
          title: "Registration error",
          modalText: response.message,
          type: "error",
        })
      );
      return false;
    }
  }
);

export const getUserThunk = createAsyncThunk(
  "auth/getUser",
  async (_, { dispatch }) => {
    const response = await getUser();
    if (!response.statusCode) {
      await dispatch(setUser(response));
      dispatch(getOrdersThunk());
    } else {
      dispatch(logOutUser());
    }
  }
);
