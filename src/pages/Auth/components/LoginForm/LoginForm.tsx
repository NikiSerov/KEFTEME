import { useForm } from 'react-hook-form';
import s from './LoginForm.module.scss';
import { loginInputs } from './consts';
import { Button } from 'antd';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import { InputController } from '../../../../components/InputController/InputController';
import { useNavigate } from 'react-router-dom';
import { ACCOUNT_ROUTE } from '../../../../constants/routes';
import { logInThunk } from '../../../../store/thunks/authThunks';
import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/store';

export const LoginForm = () => {
  const loginForm = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, processing } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      navigate(ACCOUNT_ROUTE);
    }
  }, [user]);

  const onSubmit = async ({ email, password }) => {
    dispatch(logInThunk({ email, password }));
  };

  return (
    <div className={s.loginFormContainer}>
      <span className={s.formHeading}>Log in</span>
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
        <Button size="large" htmlType="submit" loading={processing}>
          Log In
        </Button>
      </form>
    </div>
  );
};
