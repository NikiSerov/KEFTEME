import { Auth } from "./pages/Auth/Auth";
import { Cart } from "./pages/Cart/Cart";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { Shop } from "./pages/Shop/Shop";
import {
  CART_ROUTE,
  PRODUCT_ROUTE,
  AUTH_ROUTE,
  SHOP_ROUTE,
} from "./utils/consts";

export const routes = [
  {
    path: AUTH_ROUTE,
    component: <Auth />,
  },
  {
    path: PRODUCT_ROUTE + "/:id",
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
];
