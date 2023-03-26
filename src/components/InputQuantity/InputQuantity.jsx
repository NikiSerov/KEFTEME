import { Button } from "antd";
import { useState } from "react";
import s from "./InputQuantity.module.scss";
import { quantityDecr, quantityIncr } from "../../store/slices/cartSlice";
import { useDispatch } from "react-redux";
import { updateCart } from "../../store/thunks/updateCart";

export const InputQuantity = ({ defaultValue, id }) => {
  const [quantityValue, setQuantityValue] = useState(defaultValue);
  const dispatch = useDispatch();

  const handleDec = () => {
    if (quantityValue === 1) {
      return;
    }
    setQuantityValue((value => --value));
    dispatch(updateCart(quantityDecr(id)));
  };

  const handleInc = () => {
    if (quantityValue === 10) {
      return;
    }
    setQuantityValue((value => ++value));
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
