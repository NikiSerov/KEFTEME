import { Button, Result } from "antd";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { AUTH_ROUTE } from "../../constants/routes";

export const Error403 = () => {
  const navigate = useNavigate();
  const handleLogInClick = () => {
    navigate(AUTH_ROUTE);
  };
  return (
    <div>
      <Helmet>
        <title>Access error</title>
      </Helmet>
      <Result
        status="403"
        title="Access error"
        subTitle="Sorry, you are not authorized to access this page."
        extra={
          <Button size="large" onClick={handleLogInClick}>
            Log In
          </Button>
        }
      />
    </div>
  );
};
