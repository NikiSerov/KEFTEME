import { Spin } from "antd";
import s from "./Loader.module.scss";

export const Loader = () => (
  <div className={s.loaderWrapper}>
    <Spin tip="Loading" size="large"></Spin>
  </div>
);
