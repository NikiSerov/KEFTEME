import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import s from "./Loader.module.scss";

export const Loader = () => (
  <div className={s.loaderWrapper}>
    <Spin
      indicator={
        <LoadingOutlined
          style={{
            fontSize: 32,
          }}
          spin
        />
      }
    />
  </div>
);
