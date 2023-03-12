import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUser, logIn } from "../../api/authAPI";
import { logOutUser, setUser } from "../slices/authSlice";
import { LS_TOKEN_KEY } from "../../constants/constants";
import { showModal } from "../slices/modalSlice";

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

export const getUserThunk = createAsyncThunk(
  "auth/getUser",
  async (_, { dispatch }) => {
    const response = await getUser();
    if (!response.statusCode) {
      dispatch(setUser(response));
    } else {
      dispatch(logOutUser());
    }
  }
);
