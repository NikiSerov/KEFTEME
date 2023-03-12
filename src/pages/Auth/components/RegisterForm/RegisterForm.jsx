import { Button } from "antd";
import { useForm } from "react-hook-form";
import s from "./RegisterForm.module.scss";
import { registrationInputs } from "./consts";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { InputController } from "../../../../components/InputController/InputController";
import { registartion } from "../../../../api/authAPI";
import { useState } from "react";

export const RegisterForm = ({ handleSuccess }) => {
  const [isError, setIsError] = useState(false);
  const registrationForm = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async ({ email, firstName, lastName, password }) => {
    const response = await registartion(email, firstName, lastName, password);
    response.statusCode === 200 ? handleSuccess() : setIsError(true);
  };

  return (
    <div className={s.registerFormContainer}>
      <span className={s.formHeading}>Register</span>
      <form
        onSubmit={registrationForm.handleSubmit(onSubmit)}
        className={s.form}
        noValidate={true}
      >
        {registrationInputs.map((input, i) => {
          return (
            <InputController
              useFormConfig={registrationForm}
              input={input}
              key={i}
            />
          );
        })}
        <Button type="primary" htmlType="submit" className={s.registerButton}>
          Register
        </Button>
      </form>
    </div>
  );
};
