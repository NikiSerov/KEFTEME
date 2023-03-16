import { useNavigate } from "react-router-dom";
import { ERROR403_ROUTE } from "../constants/routes";

export const useAuthRedirect = (isAuthorized, loading) => {
  const navigate = useNavigate();

  if (!isAuthorized && !loading) {
    navigate(ERROR403_ROUTE);
  }
};
