import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Badge, Button } from 'antd';
import { Link } from 'react-router-dom';
import {
  AUTH_ROUTE,
  CART_ROUTE,
  SHOP_ROUTE,
  ACCOUNT_ROUTE,
} from '../../constants/routes';
import s from './Header.module.scss';
import { Logo } from '../Logo/Logo';
import { Loader } from '../Loader/Loader';
import { useAppSelector } from '../../store/store';
import useWindowDimensions from '../../hooks/useWindowDimensions';

export const Header = () => {
  const products = useAppSelector((state) => state.cart.products);
  const { logged, loading } = useAppSelector((state) => state.auth);
  const { width: screenWidth } = useWindowDimensions();

  const getAccountButton = () => {
    if (loading) {
      return (
        <div className={s.accLoaderWrapper}>
          <Loader tip="" size="default" />
        </div>
      );
    }

    if (logged) {
      return (
        <Link to={ACCOUNT_ROUTE} className={s.account}>
          <UserOutlined className={s.accountIcon} />
        </Link>
      );
    }

    return (
      <Link to={AUTH_ROUTE}>
        <Button size={screenWidth <= 650 ? 'middle' : 'large'}>Log In</Button>
      </Link>
    );
  };

  return (
    <div className={s.header}>
      <Logo />
      <Link to={SHOP_ROUTE} className={s.shopLink}>
        Shop
      </Link>
      <div className={s.buttonContainer}>
        <div className={s.accountButtonContainer}>{getAccountButton()}</div>
        <Badge
          count={products.length}
          color="#13b7b7"
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
