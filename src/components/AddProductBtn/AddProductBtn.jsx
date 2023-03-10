import { Button, message } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CART_ROUTE } from "../../constants/routes";

export const AddProductBtn = ({ handleAddClick, productId }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [isAdd, setIsAddClicked] = useState(true);
  const product = useSelector((state) => {
    return state.cart.products.find((product) => product.id === productId);
  });

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Product added to cart!",
      className: "custom-class",
      style: {
        marginTop: "110px",
      },
    });
  };

  const warning = () => {
    messageApi.open({
      type: "warning",
      content: "That product is already in your cart.",
      className: "custom-class",
      style: {
        marginTop: "110px",
      },
    });
  };

  const handleClick = () => {
    setIsAddClicked(false);
    handleAddClick();
    !!product ? warning() : success();
  };

  return (
    <>
      {contextHolder}
      {isAdd ? (
        <Button type="primary" size="large" onClick={handleClick}>
          Add to cart
        </Button>
      ) : (
        <Link to={CART_ROUTE}>
          <Button size="large">Go to cart</Button>
        </Link>
      )}
    </>
  );
};
