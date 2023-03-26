import { useNavigate } from 'react-router-dom';
import { SHOP_ROUTE } from '../../constants/routes';
import { ErrorPage } from '../ErrorPage/ErrorPage';

export const Error404 = () => {
  const navigate = useNavigate();

  const params = {
    buttonText: 'Go to shop',
    onClick: () => navigate(SHOP_ROUTE),
  };

  return <ErrorPage params={params} />;
};
