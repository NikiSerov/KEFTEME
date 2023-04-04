import { Modal as AntModal } from 'antd';
import { FC, useEffect } from 'react';

interface ModalProps {
  title: string;
  type: string;
  text: string;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ title, type, text, onClose }) => {
  const config = {
    title,
    content: text,
    centered: true,
    afterClose: onClose,
  };

  const getModal = () => {
    AntModal[type](config);
  };

  useEffect(() => {
    getModal();
  }, []);

  return <></>;
};
