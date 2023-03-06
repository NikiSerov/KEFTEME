import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Input, Button } from "antd";
import s from "./Footer.module.scss";
import cn from "classnames";
import { Logo } from "../Logo/Logo";

export const Footer = () => {
  const instIconClasses = cn(s.socialIcon, s.socialIconInst);
  return (
    <div className={s.footer}>
      <Logo />
      <div className={s.subscribeContainer}>
        <span className={s.inputLabel}>Subscribe to get latest updates</span>
        <Input.Group size="large" compact>
          <Input
            style={{ width: "calc(100% - 105px)" }}
            defaultValue="Your email address"
          />
          <Button type="primary" size="large">
            Subscribe
          </Button>
        </Input.Group>
      </div>
      <div className={s.socialsContainer}>
        <a href="https://www.facebook.com/">
          <FacebookOutlined className={s.socialIcon} />
        </a>
        <a href="https://www.instagram.com/">
          <InstagramOutlined className={instIconClasses} />
        </a>
        <a href="https://www.linkedin.com/">
          <LinkedinOutlined className={s.socialIcon} />
        </a>
      </div>
    </div>
  );
};
