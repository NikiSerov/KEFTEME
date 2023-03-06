import { Link } from "react-router-dom";
import { SHOP_ROUTE } from "../../utils/consts";
import s from "./Logo.module.scss";

export const Logo = () => {
  return (
    <Link to={SHOP_ROUTE} className={s.logo}>
      KEFTEME
    </Link>
  );
};
