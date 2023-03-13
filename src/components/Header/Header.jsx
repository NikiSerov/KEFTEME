import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Badge, Button } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  AUTH_ROUTE,
  CART_ROUTE,
  SHOP_ROUTE,
  ACCOUNT_ROUTE,
} from "../../constants/routes";
import s from "./Header.module.scss";
import { Logo } from "../Logo/Logo";

export const Header = () => {
  const products = useSelector((state) => state.cart.products);
  const isAuth = useSelector((state) => state.auth.logged);
  return (
    <div className={s.header}>
      <Logo />
      <Link to={SHOP_ROUTE} className={s.shop}>
        Shop
      </Link>
      <div className={s.buttonContainer}>
        {isAuth ? (
          <Link to={ACCOUNT_ROUTE} className={s.account}>
            <UserOutlined className={s.accountIcon} />
          </Link>
        ) : (
          <Link to={AUTH_ROUTE}>
            <Button type="primary" size="large">
              Log In
            </Button>
          </Link>
        )}
        <Badge
          count={products.length}
          color="cyan"
          offset={[-5, 5]}
          className={s.badge}
        >
          <Link to={CART_ROUTE} className={s.cart}>
            <ShoppingCartOutlined className={s.cartIcon} />
          </Link>
        </Badge>
      </div>
    </div>
  );
};
