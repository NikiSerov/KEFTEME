import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import { ACCOUNT_ROUTE } from "../../constants/routes";
import s from "./OrderSuccess.module.scss";
import { Helmet } from "../../components/Helmet/Helmet";

export const OrderSuccess = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ACCOUNT_ROUTE);
  };
  return (
    <>
      <Helmet title="Success!" />
      <div className={s.wrapper}>
        <Result
          status="success"
          title="Order confirmed!"
          subTitle="Thank you for your order! You will receive an order confirmation email shortly with the expected delivery date for your item."
          extra={[
            <Button key="viewOrder" onClick={handleClick}>
              View order
            </Button>,
          ]}
        />
      </div>
    </>
  );
};
