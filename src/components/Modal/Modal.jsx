import { Modal as AntModal } from "antd";
import { useEffect } from "react";

export const Modal = ({ title, type, text, onClose }) => {
  const config = {
    title,
    content: text,
    afterClose: onClose,
    centered: true,
  };

  const getModal = () => {
    AntModal[type](config);
  };

  useEffect(() => {
    getModal();
  }, []);

  return <></>;
};
