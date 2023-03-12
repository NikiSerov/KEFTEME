import { LoginForm } from "./components/LoginForm/LoginForm";
import { RegisterForm } from "./components/RegisterForm/RegisterForm";
import s from "./Auth.module.scss";
import { Button, Modal } from "antd";
import { useState } from "react";

export const Auth = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const handleRegistrationSuccess = () => {
    setIsLoginForm(true);
    setModalOpen(true);
  };

  const handleModalOk = () => {
    setModalOpen(false);
  };

  const handleModalCancel = () => {
    setModalOpen(false);
  };
  return (
    <div className={s.authContainer}>
      <div className={s.auth}>
        {isLoginForm ? (
          <LoginForm />
        ) : (
          <RegisterForm handleSuccess={handleRegistrationSuccess} />
        )}
        <span className={s.separator}>or</span>
        <Button
          type="link"
          className={s.switchButton}
          onClick={() => setIsLoginForm((prev) => !prev)}
        >
          {isLoginForm ? "Register" : "Login"}
        </Button>
      </div>
      <Modal
        title="Success!"
        open={modalOpen}
        centered={true}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        footer={[
          <Button type="primary" onClick={handleModalOk}>
            Ok
          </Button>,
        ]}
      >
        You have successfully registered! Please log in to your account.
      </Modal>
    </div>
  );
};
