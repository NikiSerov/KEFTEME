import { FC } from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';

interface HelmetProps {
  title: string;
}

export const Helmet: FC<HelmetProps> = ({ title }) => {
  return (
    <ReactHelmet>
      <title>{title}</title>
    </ReactHelmet>
  );
};
