import { Spin } from 'antd';
import { FC } from 'react';
import s from './Loader.module.scss';

interface LoaderProps {
  tip?: string;
  size?: 'large' | 'small' | 'default';
}

export const Loader: FC<LoaderProps> = ({
  tip = 'Loading',
  size = 'large',
}) => (
  <div className={s.loaderWrapper}>
    <Spin tip={tip} size={size} />
  </div>
);
