import s from './Account.module.scss';
import { Button } from 'antd';
import { logOutUser } from '../../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { SHOP_ROUTE } from '../../constants/routes';
import { UserData } from '../../components/UserData/UserData';
import { OrdersTable } from './components/OrdersTable/OrdersTable';
import { FC, useEffect } from 'react';
import { getOrdersThunk } from '../../store/thunks/orderThunks';
import { Loader } from '../../components/Loader/Loader';
import { useAuthRedirect } from '../../hooks/useAuthRedirect';
import { Helmet } from '../../components/Helmet/Helmet';
import { useAppDispatch, useAppSelector } from '../../store/store';
import useWindowDimensions from '../../hooks/useWindowDimensions';

export const Account: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, loading } = useAppSelector((state) => state.auth);
  const { width: screenWidth } = useWindowDimensions();

  useEffect(() => {
    dispatch(getOrdersThunk());
  }, []);

  useAuthRedirect(user, loading);

  const hadleLogOut = () => {
    dispatch(logOutUser());
    navigate(SHOP_ROUTE);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Helmet title="Your account" />
      <div className={s.accountPage}>
        <div className={s.userDataWrapper}>
          <p className={s.userInfoHeading}>Your info</p>
          <div className={s.dataBtnContainer}>
            <div className={s.userData}>
              <UserData
                firstName={user.firstName}
                lastName={user.lastName}
                email={user.email}
              />
            </div>
            <Button
              size="large"
              onClick={hadleLogOut}
              style={{ width: '100px' }}
            >
              Log Out
            </Button>
          </div>
        </div>
        <div className={s.usersOrders}>
          <p className={s.usersOrdersHeading}>Your orders</p>
          <OrdersTable />
        </div>
      </div>
    </>
  );
};
