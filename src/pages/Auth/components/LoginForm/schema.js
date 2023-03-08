import * as yup from "yup";

export const schema = yup
  .object({
    email: yup
      .string()
      .required("Email is required")
      .email("Email must be a valid email"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Too short")
      .max(18, "Too long"),
  })
  .required();
