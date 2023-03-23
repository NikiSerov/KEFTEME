import { Button } from "antd";
import { useForm } from "react-hook-form";
import s from "./RegisterForm.module.scss";
import { registrationInputs } from "./consts";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { InputController } from "../../../../components/InputController/InputController";
import { useDispatch, useSelector } from "react-redux";
import { registerThunk } from "../../../../store/thunks/userThunks";

export const RegisterForm = ({ handleSuccess }) => {
  const dispatch = useDispatch();
  const { processing } = useSelector((state) => state.auth);
  const registrationForm = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async ({ email, firstName, lastName, password }) => {
    const response = await dispatch(
      registerThunk({
        email,
        firstName,
        lastName,
        password,
      })
    );
    response.payload && handleSuccess();
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
        <Button
          size="large"
          htmlType="submit"
          className={s.registerButton}
          loading={processing}
        >
          Register
        </Button>
      </form>
    </div>
  );
};
