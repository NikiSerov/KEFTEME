import { useForm } from "react-hook-form";
import s from "./LoginForm.module.scss";
import { loginInputs } from "./consts";
import { Button } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { InputController } from "../../../../components/InputController/InputController";

export const LoginForm = () => {
  const loginForm = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div className={s.loginFormContainer}>
      <span className={s.formHeading}>Login</span>
      <form
        onSubmit={loginForm.handleSubmit(onSubmit)}
        className={s.form}
        noValidate={true}
      >
        {loginInputs.map((input, i) => {
          return (
            <InputController useFormConfig={loginForm} input={input} key={i} />
          );
        })}
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </form>
    </div>
  );
};
