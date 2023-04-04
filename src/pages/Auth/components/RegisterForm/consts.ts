import { Input } from "../../../../types/types";

export const registrationInputs: Input[] = [
  {
    placeHolder: "Email",
    name: "email",
    type: "email",
  },
  {
    placeHolder: "First name",
    name: "firstName",
  },
  {
    placeHolder: "Last name",
    name: "lastName",
  },
  {
    placeHolder: "Password",
    name: "password",
    type: "password",
  },
  {
    placeHolder: "Confirm password",
    name: "confirmPassword",
    type: "password",
  },
];
