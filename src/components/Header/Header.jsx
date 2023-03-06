import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { AUTH_ROUTE, CART_ROUTE, SHOP_ROUTE } from "../../utils/consts";
import s from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={s.header}>
      <Link to={SHOP_ROUTE} className={s.logo}>
        KEFTEME
      </Link>
      <Link to={SHOP_ROUTE} className={s.shop}>
        Shop
      </Link>
      <div className={s.buttonContainer}>
        <Link to={AUTH_ROUTE}>
          <Button type="primary" size="large">
            Login
          </Button>
        </Link>
        <Link to={CART_ROUTE} className={s.cart}>
          <ShoppingCartOutlined className={s.icon} />
          <span className={s.count}>1</span>
        </Link>
      </div>
    </div>
  );
};
