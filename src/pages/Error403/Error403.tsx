import { ExceptionStatusType } from 'antd/es/result';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { AUTH_ROUTE } from '../../constants/routes';
import { ErrorPage } from '../ErrorPage/ErrorPage';

export const Error403: FC = () => {
  const navigate = useNavigate();

  const params = {
    status: '403' as ExceptionStatusType,
    title: 'Access error',
    subtitle: 'Sorry, you are not authorized to access this page.',
    buttonText: 'Log in',
    onClick: () => navigate(AUTH_ROUTE),
  };

  return <ErrorPage params={params} />;
};
