import { Button, Result } from 'antd';
import { Helmet } from '../../components/Helmet/Helmet';

export const ErrorPage = ({
  params: {
    status = 404,
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
