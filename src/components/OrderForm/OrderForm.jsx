import { Modal, message } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import s from "./OrderForm.module.scss";
import { ACCOUNT_ROUTE } from "../../utils/consts";

export const OrderForm = () => {
  const { register, handleSubmit } = useForm();
  const [formData, setFormData] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    setFormData(data);
    setModalOpen(true);
  };

  const handleModalOk = () => {
    setModalOpen(false);
    messageApi.open({
      type: "success",
      content: "Your order is accepted!",
      duration: 1.5,
      onClose: () => navigate(ACCOUNT_ROUTE),
      style: {
        marginTop: "30vh",
      },
    });
  };

  const handleModalCancel = () => {
    setModalOpen(false);
  };

  return (
    <div className={s.orderFormContainer}>
      <p className={s.formLabel}>
        Please enter your shipping address and contact information:
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <div className={s.inputContainer}>
          <label htmlFor="country" className={s.inputLabel}>
            Country
          </label>
          <input
            {...register("country", { required: true })}
            className={s.input}
            placeholder="Country"
            name="country"
          />
        </div>
        <div className={s.inputContainer}>
          <label htmlFor="city" className={s.inputLabel}>
            City
          </label>
          <input
            {...register("city", { required: true })}
            className={s.input}
            placeholder="City"
            name="city"
          />
        </div>
        <div className={s.inputContainer}>
          <label htmlFor="street" className={s.inputLabel}>
            Street
          </label>
          <input
            {...register("street", { required: true })}
            className={s.input}
            placeholder="Street"
            name="street"
          />
        </div>
        <div className={s.inputContainer}>
          <label htmlFor="phoneNumber" className={s.inputLabel}>
            Phone number
          </label>
          <input
            {...register("phoneNumber", { required: true })}
            className={s.input}
            placeholder="Phone number"
            name="phoneNumber"
          />
        </div>
        <div className={s.inputContainer}>
          <label htmlFor="delivery" className={s.inputLabel}>
            Delivery
          </label>
          <select
            {...register("delivery", { required: true })}
            className={s.input}
            name="delivery"
          >
            <option key="express" value="express">
              Express
            </option>
            <option key="standart" value="standart">
              Standart
            </option>
          </select>
        </div>
        <input type="submit" className={s.submit} value="Confirm" />
        {contextHolder}
        <Modal
          open={modalOpen}
          title="Confirm your order details"
          onOk={handleModalOk}
          onCancel={handleModalCancel}
          centered={true}
        >
          <div className={s.modalText}>
            <span>Name: Nikita Serov</span>
            <span>Email: nikitaserov1997@gmail.com</span>
            <span>Country: {formData?.country}</span>
            <span>City: {formData?.city}</span>
            <span>Phone number: {formData?.phoneNumber}</span>
            <span>Delivery: {formData?.delivery}</span>
          </div>
        </Modal>
      </form>
    </div>
  );
};
