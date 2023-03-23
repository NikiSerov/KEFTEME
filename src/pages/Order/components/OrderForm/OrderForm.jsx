import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { InputController } from "../../../../components/InputController/InputController";
import { SelectController } from "../../../../components/SelectController/SelectController";
import { createOrderThunk } from "../../../../store/thunks/orderThunks";
import { deliveryOptions, orderFormInputs } from "./constants";
import { useNavigate } from "react-router-dom";
import s from "./OrderForm.module.scss";
import { ORDER_SUCCESS_ROUTE } from "../../../../constants/routes";
import { schema } from "./schema";

export const OrderForm = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const orderForm = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async () => {
    const response = await dispatch(createOrderThunk(cart));
    response.payload && navigate(ORDER_SUCCESS_ROUTE);
  };

  return (
    <div className={s.orderFormContainer}>
      <p className={s.formLabel}>
        Please enter your shipping address and contact information:
      </p>
      <form
        onSubmit={orderForm.handleSubmit(onSubmit)}
        className={s.form}
        noValidate={true}
      >
        {orderFormInputs.map((input, i) => {
          return (
            <div className={s.inputContainer} key={i}>
              <span className={s.inputLabel}>{input.placeHolder}:</span>
              <InputController useFormConfig={orderForm} input={input} />
            </div>
          );
        })}
        <SelectController
          name="delivery"
          useFormConfig={orderForm}
          options={deliveryOptions}
          wrapperClass={s.inputContainer}
          label="Choose delivery:"
        />
        <Button size="large" htmlType="submit" className={s.submit}>
          Order
        </Button>
      </form>
    </div>
  );
};
