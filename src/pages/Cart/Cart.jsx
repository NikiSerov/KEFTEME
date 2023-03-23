import { Button } from "antd";
import s from "./Cart.module.scss";
import { useNavigate } from "react-router-dom";
import { AUTH_ROUTE, ORDER_ROUTE } from "../../constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { CartTable } from "../../components/CartTable/CartTable";
import { updateCart } from "../../store/thunks/updateCart";
import { clearCart } from "../../store/slices/cartSlice";
import { Helmet } from "react-helmet";

export const Cart = () => {
  const isAuth = useSelector((state) => state.auth.logged);
  const { products: cartProducts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOrderClick = (e) => {
    e.preventDefault();
    if (isAuth) {
      navigate(ORDER_ROUTE);
    } else {
      navigate(AUTH_ROUTE);
    }
  };

  const handleClearCart = () => {
    dispatch(updateCart(clearCart()));
  };

  return (
    <div className={s.cartPage}>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <h1 className={s.cartPageHeading}>Your cart</h1>
      <CartTable isCartPage={true} classname={s.cartTable} />
      {!!cartProducts.length && (
        <div className={s.buttonsContainer}>
          <Button size="large" onClick={handleClearCart}>
            Clear cart
          </Button>
          <div className={s.order}>
            <Button size="large" onClick={handleOrderClick}>
              Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
