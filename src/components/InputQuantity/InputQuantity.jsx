import { Button, InputNumber } from "antd";
import { useState } from "react";
import s from "./InputQuantity.module.scss";

export const InputQuantity = ({ defaultValue }) => {
  const [inputValue, setInputValue] = useState(defaultValue);

  const handleChange = (e) => {
    // if (!/^[0-9]{0,2}$/.test(e.target.value)) {
    //   return;
    // }
    setInputValue(e.target.value);
  };

  //   const handleKeyPress = (e) => {
  //     if (!/^[0-9]{0,2}$/.test(e.key)) {
  //       e.preventDefault();
  //     }
  //   };

  const handleDec = () => {
    if (inputValue === 0) {
      return;
    }
    setInputValue((value) => (value -= 1));
  };

  const handleInc = () => {
    if (inputValue === 99) {
      return;
    }
    setInputValue((value) => (value += 1));
  };

  return (
    <div className={s.wrapper}>
      <Button className={s.decButton} onClick={handleDec}>
        -
      </Button>
      <InputNumber
        defaultValue={defaultValue}
        onChange={handleChange}
        className={s.quantityInput}
        value={inputValue}
        type="number"
      />
      <Button className={s.button} onClick={handleInc}>
        +
      </Button>
    </div>
  );
};
