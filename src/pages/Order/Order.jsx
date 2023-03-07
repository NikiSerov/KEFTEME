import s from "./Order.module.scss";
import { OrderForm } from "../../components/OrderForm/OrderForm";

export const Order = () => {
  return (
    <div className={s.orderPage}>
      <h1 className={s.orderHeading}>Your order</h1>
      <div className={s.orderData}>
        <div className={s.userData}>
          <p>
            <span className={s.textAccent}>First name: </span>Nikita
          </p>
          <p>
            <span className={s.textAccent}>Last name: </span>Serov
          </p>
          <p>
            <span className={s.textAccent}>Email: </span>
            nikitaserov1997@gmail.com
          </p>
        </div>
        <div>CART TABLE</div>
        <OrderForm />
      </div>
      <div className={s.cartWrapper}></div>
    </div>
  );
};
