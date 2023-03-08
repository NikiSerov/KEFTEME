import { Input } from "antd";
import { ErrorMessage } from "@hookform/error-message";
import s from "./Input.module.scss";
import { forwardRef } from "react";

export const InputField = forwardRef(
  ({ placeHolder, classname, name, errors, type = "text", ...props }, ref) => {
    return (
      <div className={s.inputContainer}>
        <Input
          placeholder={placeHolder}
          className={classname}
          type={type}
          ref={ref}
          {...props}
        />
        {!!errors && (
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => <p className={s.error}>{message}</p>}
          />
        )}
      </div>
    );
  }
);
