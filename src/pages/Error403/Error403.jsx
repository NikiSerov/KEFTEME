import { Button, Result } from "antd";
import { Helmet } from "../../components/Helmet/Helmet";
import { useNavigate } from "react-router-dom";
import { AUTH_ROUTE } from "../../constants/routes";

export const Error403 = () => {
  const navigate = useNavigate();
  const handleLogInClick = () => {
    navigate(AUTH_ROUTE);
  };

  return (
    <>
      <Helmet titel="Access error" />
      <div>
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
    </>
  );
};
