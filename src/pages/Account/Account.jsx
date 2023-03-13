import s from "./Account.module.scss";
import { Button, Result } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { AUTH_ROUTE, SHOP_ROUTE } from "../../constants/routes";
import { UserData } from "../../components/UserData/UserData";
import { OrdersTable } from "./components/OrdersTable/OrdersTable";

export const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const hadleLogOut = () => {
    dispatch(logOutUser());
    navigate(SHOP_ROUTE);
  };

  const handleLogInClick = () => {
    navigate(AUTH_ROUTE);
  };

  return !!user ? (
    <div className={s.accountPage}>
      <h1 className={s.accountHeading}>Your account</h1>
      <UserData
        firstName={user.firstName}
        lastName={user.lastName}
        email={user.email}
      />
      <div className={s.usersOrders}>
        <h2 className={s.usersOrdersHeading}>Your orders</h2>
        <OrdersTable />
      </div>
      <div>
        <Button type="primary" size="large" onClick={hadleLogOut}>
          Log Out
        </Button>
      </div>
    </div>
  ) : (
    <Result
      status="403"
      title="Error"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Button type="primary" size="large" onClick={handleLogInClick}>
          Log In
        </Button>
      }
    />
  );
};
