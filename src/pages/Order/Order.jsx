import s from "./Order.module.scss";
import { OrderForm } from "./components/OrderForm/OrderForm";
import { useSelector } from "react-redux";
import { UserData } from "../../components/UserData/UserData";
import { CartTable } from "../../components/CartTable/CartTable";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";
import { Loader } from "../../components/Loader/Loader";
import { Divider } from "antd";

export const Order = () => {
  const { user, loading } = useSelector((state) => state.auth);

  useAuthRedirect(user, loading);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={s.orderPage}>
      <h1 className={s.orderHeading}>Your order</h1>
      <div className={s.orderWrapper}>
        <div className={s.orderData}>
          {/* <div className={s.userInfoWrapper}>
            <p>First name: {user.firstName}</p>
            <p>Last name: {user.lastName}</p>
            <p>Email: {user.email}</p>
          </div>
          <Divider /> */}
          <OrderForm />
        </div>
        <div className={s.cartWrapper}>
          <p className={s.cartHeading}>Your cart:</p>
          <CartTable />
        </div>
      </div>
    </div>
  );
};
