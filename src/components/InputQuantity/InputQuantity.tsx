import { Button } from 'antd';
import { FC, useState } from 'react';
import s from './InputQuantity.module.scss';
import { quantityDecr, quantityIncr } from '../../store/slices/cartSlice';
import { updateCart } from '../../store/thunks/updateCart';
import { useAppDispatch } from '../../store/store';

interface InputQuantityProps {
  defaultValue: number;
  id: number;
}

export const InputQuantity: FC<InputQuantityProps> = ({ defaultValue, id }) => {
  const [quantityValue, setQuantityValue] = useState(defaultValue);
  const dispatch = useAppDispatch();

  const handleDec = () => {
    if (quantityValue === 1) {
      return;
    }
    setQuantityValue((value) => --value);
    dispatch(updateCart(quantityDecr(id)));
  };

  const handleInc = () => {
    if (quantityValue === 10) {
      return;
    }
    setQuantityValue((value) => ++value);
    dispatch(updateCart(quantityIncr(id)));
  };

  return (
    <div className={s.wrapper}>
      <Button className={s.decButton} onClick={handleDec}>
        -
      </Button>
      <span className={s.quantityValue}>{quantityValue}</span>
      <Button className={s.button} onClick={handleInc}>
        +
      </Button>
    </div>
  );
};
