import { FC, ReactNode } from 'react';
import s from './ContentLayout.module.scss';

interface ContentLayoutProps {
  children: ReactNode;
}

export const ContentLayout: FC<ContentLayoutProps> = ({ children }) => {
  return <div className={s.wrapper}>{children}</div>;
};
