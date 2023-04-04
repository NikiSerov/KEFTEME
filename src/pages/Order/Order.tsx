import s from './Order.module.scss';
import { OrderForm } from './components/OrderForm/OrderForm';
import { CartTable } from '../../components/CartTable/CartTable';
import { useAuthRedirect } from '../../hooks/useAuthRedirect';
import { Loader } from '../../components/Loader/Loader';
import { Helmet } from '../../components/Helmet/Helmet';
import { FC } from 'react';
import { useAppSelector } from '../../store/store';

export const Order: FC = () => {
  const { user, loading } = useAppSelector((state) => state.auth);

  useAuthRedirect(user, loading);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Helmet title="Order" />
      <div className={s.orderPage}>
        <h1 className={s.orderHeading}>Your order</h1>
        <div className={s.orderWrapper}>
          <div className={s.orderData}>
            <OrderForm />
          </div>
          <div className={s.cartWrapper}>
            <p className={s.cartHeading}>Your cart:</p>
            <CartTable />
          </div>
        </div>
      </div>
    </>
  );
};
