import s from "./Order.module.scss";
import { OrderForm } from "./components/OrderForm/OrderForm";
import { useSelector } from "react-redux";
import { UserData } from "../../components/UserData/UserData";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import { AUTH_ROUTE } from "../../constants/routes";
import { CartTable } from "../../components/CartTable/CartTable";

export const Order = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleLogInClick = () => {
    navigate(AUTH_ROUTE);
  };

  return !!user ? (
    <div className={s.orderPage}>
      <h1 className={s.orderHeading}>Your order</h1>
      <div className={s.orderWrapper}>
        <div className={s.orderData}>
          <UserData
            firstName={user.firstName}
            lastName={user.lastName}
            email={user.email}
          />
          <OrderForm />
        </div>
        <div className={s.cartWrapper}>
          <p className={s.cartHeading}>Your cart:</p>
          <CartTable />
        </div>
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
