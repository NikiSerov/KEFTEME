import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Button, Space } from "antd";
import s from "./Footer.module.scss";
import { Logo } from "../Logo/Logo";
import { InputController } from "../InputController/InputController";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { useDispatch } from "react-redux";
import { showModal } from "../../store/slices/modalSlice";

export const Footer = () => {
  const dispatch = useDispatch();
  const subscribeForm = useForm({
    resolver: yupResolver(schema),
  });

  const inputData = {
    placeHolder: "Email",
    name: "email",
    type: "email",
  };

  const onSubmit = () => {
    dispatch(
      showModal({
        title: "Success",
        type: "success",
        modalText: "Successfully subscribed",
      })
    );
  };

  return (
    <div className={s.footer}>
      <Logo />
      <div className={s.subscribeContainer}>
        <span className={s.inputLabel}>Subscribe to get latest updates</span>
        <form onSubmit={subscribeForm.handleSubmit(onSubmit)} noValidate={true}>
          <Space.Compact size="large">
            <InputController input={inputData} useFormConfig={subscribeForm} />
            <Button size="large" htmlType="submit">
              Subscribe
            </Button>
          </Space.Compact>
        </form>
      </div>
      <div className={s.socialsContainer}>
        <a href="https://www.facebook.com/">
          <FacebookOutlined className={s.socialIcon} />
        </a>
        <a href="https://www.instagram.com/">
          <InstagramOutlined className={s.socialIcon} />
        </a>
        <a href="https://www.linkedin.com/">
          <LinkedinOutlined className={s.socialIcon} />
        </a>
      </div>
    </div>
  );
};
