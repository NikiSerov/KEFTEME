import { useNavigate } from 'react-router-dom';
import { ERROR403_ROUTE } from '../constants/routes';
import { User } from '../types/types';

export const useAuthRedirect = (isAuthorized: User, loading: boolean) => {
  const navigate = useNavigate();

  if (!isAuthorized && !loading) {
    navigate(ERROR403_ROUTE);
  }
};
