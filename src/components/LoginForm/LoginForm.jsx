import { useForm } from "react-hook-form";
import s from "./LoginForm.module.scss";

export const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className={s.loginFormContainer}>
      <span className={s.formHeading}>Login</span>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <input
          {...register("login", { required: true })}
          className={s.input}
          placeholder="Login"
        />
        <input
          {...register("password", { required: true })}
          className={s.input}
          placeholder="Password"
        />
        <input type="submit" className={s.submit} value="Submit" />
      </form>
    </div>
  );
};
