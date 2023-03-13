import { Button, Modal } from "antd";
import s from "./Cart.module.scss";
import { useNavigate } from "react-router-dom";
import { AUTH_ROUTE, ORDER_ROUTE } from "../../constants/routes";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartTable } from "../../components/CartTable/CartTable";
import { updateCart } from "../../store/thunks/updateCart";
import { clearCart } from "../../store/slices/cartSlice";

export const Cart = () => {
  const isAuth = useSelector((state) => state.auth.logged);
  const { products: cartProducts } = useSelector((state) => state.cart);
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOrderClick = (e) => {
    e.preventDefault();
    if (!isAuth) {
      setModalOpen(true);
    } else {
      navigate(ORDER_ROUTE);
    }
  };

  const handleClearCart = () => {
    dispatch(updateCart(clearCart()));
  };

  const handleModalOk = () => {
    navigate(AUTH_ROUTE);
  };

  const handleModalCancel = () => {
    setModalOpen(false);
  };

  return (
    <div className={s.cartPage}>
      <h1 className={s.cartPageHeading}>Your cart</h1>
      <CartTable isCartPage={true} classname={s.cartTable} />
      {!!cartProducts.length && (
        <div className={s.buttonsContainer}>
          <Button size="large" onClick={handleClearCart}>
            Clear cart
          </Button>
          <div className={s.order}>
            <Button type="primary" size="large" onClick={handleOrderClick}>
              Checkout
            </Button>
            <Modal
              open={modalOpen}
              title="Please log in to your account"
              onOk={handleModalOk}
              onCancel={handleModalCancel}
              centered={true}
            >
              You need to be logged in to your account to continue your order.
            </Modal>
          </div>
        </div>
      )}
    </div>
  );
};
