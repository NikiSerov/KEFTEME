import { Button, Modal } from "antd";
import s from "./Cart.module.scss";
import { Table, InputNumber } from "antd";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AUTH_ROUTE, ORDER_ROUTE } from "../../constants/routes";
import { useState } from "react";

const columns = [
  {
    title: "№",
    dataIndex: "orderID",
    key: "orderID",
  },
  {
    title: "Product name",
    dataIndex: "productName",
    key: "productName",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
    render: (text) => (
      <InputNumber
        defaultValue={text}
        onChange={(value) => console.log(value)}
        min={1}
        max={10}
      />
    ),
  },
  {
    title: "Product total",
    dataIndex: "price",
    key: "price",
  },
];

const data = [
  {
    key: "1",
    orderID: "1",
    productName: "Snake King",
    quantity: 1,
    price: "$300",
  },
  {
    key: "2",
    orderID: "2",
    productName: "Molewalkers",
    quantity: 2,
    price: "$400",
  },
];

export const Cart = () => {
  // const isAuth = useSelector(state => state.auth.logged);
  const isAuth = true;

  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOrderClick = (e) => {
    e.preventDefault();
    if (!isAuth) {
      setModalOpen(true);
    } else {
      navigate(ORDER_ROUTE);
    }
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
      <Table columns={columns} dataSource={data} pagination={false} />
      <div className={s.buttonsContainer}>
        <Button type="primary" size="large" className={s.clear}>
          Clear cart
        </Button>
        <div className={s.order}>
          <span className={s.total}>Total: $700</span>
          <Button type="primary" size="large" onClick={handleOrderClick}>
            Checkout
          </Button>
          <Modal
            open={modalOpen}
            title="Please log in to your account"
            onOk={handleModalOk}
            onCancel={handleModalCancel}
          >
            You need to be logged in to your account to continue your order.
          </Modal>
        </div>
      </div>
    </div>
  );
};
