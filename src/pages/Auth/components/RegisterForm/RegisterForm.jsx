import { Button } from "antd";
import { useForm } from "react-hook-form";
import s from "./RegisterForm.module.scss";
import { registrationInputs } from "./consts";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { InputController } from "../../../../components/InputController/InputController";

export const RegisterForm = () => {
  const registrationForm = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

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
