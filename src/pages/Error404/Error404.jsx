import { Button, Result } from "antd";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { SHOP_ROUTE } from "../../constants/routes";

export const Error404 = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(SHOP_ROUTE);
  };
  return (
    <div>
      <Helmet>
        <title>404</title>
      </Helmet>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button size="large" onClick={handleClick}>
            Go to shop
          </Button>
        }
      />
    </div>
  );
};
