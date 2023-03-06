import { LoginForm } from "../../components/LoginForm/LoginForm";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import s from "./Auth.module.scss";

export const Auth = () => {
  return (
    <div className={s.authContainer}>
      <div className={s.auth}>
        <LoginForm />
        <span className={s.separator}>or</span>
        <RegisterForm />
      </div>
    </div>
  );
};
