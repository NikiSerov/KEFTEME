import { useForm } from "react-hook-form";
import s from "./RegisterForm.module.scss";

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className={s.registerFormContainer}>
      <span className={s.formHeading}>Register</span>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <input
          {...register("firstName", { required: true })}
          className={s.input}
          placeholder="First name"
        />
        <input
          {...register("lastName", { required: true })}
          className={s.input}
          placeholder="Last name"
        />
        <input
          {...register("login", { required: true, minLength: 4 })}
          className={s.input}
          placeholder="Login"
        />
        <input
          {...register("password", { required: true, minLength: 8 })}
          className={s.input}
          placeholder="Password"
        />
        <input type="submit" className={s.submit} value="Submit" />
      </form>
    </div>
  );
};
