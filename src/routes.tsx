import { Account } from './pages/Account/Account';
import { Auth } from './pages/Auth/Auth';
import { Cart } from './pages/Cart/Cart';
import { Order } from './pages/Order/Order';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { Shop } from './pages/Shop/Shop';
import {
  CART_ROUTE,
  PRODUCT_ROUTE,
  AUTH_ROUTE,
  SHOP_ROUTE,
  ACCOUNT_ROUTE,
  ORDER_ROUTE,
  ERROR403_ROUTE,
  ORDER_SUCCESS_ROUTE,
} from './constants/routes';
import { Error403 } from './pages/Error403/Error403';
import { OrderSuccess } from './pages/OrderSuccess/OrderSuccess';
import { Error404 } from './pages/Error404/Error404';

export const routes = [
  {
    path: AUTH_ROUTE,
    component: <Auth />,
  },
  {
    path: PRODUCT_ROUTE + '/:id',
    component: <ProductPage />,
  },
  {
    path: CART_ROUTE,
    component: <Cart />,
  },
  {
    path: SHOP_ROUTE,
    component: <Shop />,
    index: true,
  },
  {
    path: ACCOUNT_ROUTE,
    component: <Account />,
  },
  {
    path: ORDER_ROUTE,
    component: <Order />,
  },
  {
    path: ERROR403_ROUTE,
    component: <Error403 />,
  },
  {
    path: '*',
    component: <Error404 />,
  },
  {
    path: ORDER_SUCCESS_ROUTE,
    component: <OrderSuccess />,
  },
];
