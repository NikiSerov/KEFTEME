import s from "./Order.module.scss";
import { OrderForm } from "../../components/OrderForm/OrderForm";

export const Order = () => {
  return (
    <div className={s.orderPage}>
      <OrderForm />
    </div>
  );
};
