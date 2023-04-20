import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';
import { Button, Space } from 'antd';
import s from './Footer.module.scss';
import { Logo } from '../Logo/Logo';
import { InputController } from '../InputController/InputController';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import { showModal } from '../../store/slices/modalSlice';
import { useAppDispatch } from '../../store/store';
import { Input } from '../../types/types';
import useWindowDimensions from '../../hooks/useWindowDimensions';

export const Footer = () => {
  const dispatch = useAppDispatch();
  const subscribeForm = useForm({
    resolver: yupResolver(schema),
  });
  const { width: screenWidth } = useWindowDimensions();

  const inputData: Input = {
    placeHolder: 'Email',
    name: 'email',
    type: 'email',
  };

  const onSubmit = () => {
    dispatch(
      showModal({
        title: 'Success',
        type: 'success',
        modalText: 'Successfully subscribed',
      }),
    );
  };

  return (
    <div className={s.footer}>
      <Logo />
      <div className={s.subscribeContainer}>
        <span className={s.inputLabel}>Subscribe to get latest updates</span>
        <form onSubmit={subscribeForm.handleSubmit(onSubmit)} noValidate={true}>
          <Space.Compact
            size={screenWidth <= 920 ? 'middle' : 'large'}
            className={s.inputContainer}
          >
            <InputController input={inputData} useFormConfig={subscribeForm} />
            <Button htmlType="submit">Subscribe</Button>
          </Space.Compact>
        </form>
      </div>
      <div className={s.socialsContainer}>
        <a href="https://www.facebook.com/" className={s.socialLink}>
          <FacebookOutlined className={s.socialIcon} />
        </a>
        <a href="https://www.instagram.com/" className={s.socialLink}>
          <InstagramOutlined className={s.socialIcon} />
        </a>
        <a href="https://www.linkedin.com/" className={s.socialLink}>
          <LinkedinOutlined className={s.socialIcon} />
        </a>
      </div>
    </div>
  );
};
