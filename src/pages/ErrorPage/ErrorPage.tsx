import { Button, Result } from 'antd';
import { ExceptionStatusType } from 'antd/es/result';
import { FC } from 'react';
import { Helmet } from '../../components/Helmet/Helmet';

interface ErrorPageProps {
  params: {
    status?: ExceptionStatusType;
    title?: string;
    subtitle?: string;
    buttonText: string;
    onClick: () => void;
  };
}

export const ErrorPage: FC<ErrorPageProps> = ({
  params: {
    status = '404',
    title = 'Not found',
    subtitle = 'Sorry, the page you visited does not exist.',
    buttonText,
    onClick,
  },
}) => {
  return (
    <>
      <Helmet title={title} />
      <div>
        <Result
          status={status}
          title={title}
          subTitle={subtitle}
          extra={
            <Button size="large" onClick={onClick}>
              {buttonText}
            </Button>
          }
        />
      </div>
    </>
  );
};
