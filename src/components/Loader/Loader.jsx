import { Spin } from "antd";
import s from "./Loader.module.scss";

export const Loader = ({ tip = "Loading", size = "large" }) => (
  <div className={s.loaderWrapper}>
    <Spin tip={tip} size={size} />
  </div>
);
