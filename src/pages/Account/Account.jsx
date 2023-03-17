import s from "./Account.module.scss";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { SHOP_ROUTE } from "../../constants/routes";
import { UserData } from "../../components/UserData/UserData";
import { OrdersTable } from "./components/OrdersTable/OrdersTable";
import { useEffect } from "react";
import { getOrdersThunk } from "../../store/thunks/orderThunks";
import { Loader } from "../../components/Loader/Loader";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";

export const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getOrdersThunk());
  }, []);

  useAuthRedirect(user, loading);

  const hadleLogOut = () => {
    dispatch(logOutUser());
    navigate(SHOP_ROUTE);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={s.accountPage}>
      <div className={s.userDataWrapper}>
        <h2 className={s.userInfoHeading}>Your info</h2>
        <UserData
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
        />
        <div className={s.buttonContainer}>
          <Button size="large" onClick={hadleLogOut}>
            Log Out
          </Button>
        </div>
      </div>
      <div className={s.usersOrders}>
        <h2 className={s.usersOrdersHeading}>Your orders</h2>
        <OrdersTable />
      </div>
    </div>
  );
};
