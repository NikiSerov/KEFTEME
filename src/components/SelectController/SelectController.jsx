import { ErrorMessage } from "@hookform/error-message";
import { Select } from "antd";
import { Controller } from "react-hook-form";

import s from "./Select.module.scss";

export const SelectController = ({
  name,
  useFormConfig,
  options,
  wrapperClass,
  label = false,
}) => {
  return (
    <div className={wrapperClass}>
      {!!label && <p className={s.selectLabel}>{label}</p>}
      <Controller
        control={useFormConfig.control}
        name={name}
        render={({ field }) => (
          <>
            <Select
              {...field}
              placeholder="Choose delivery"
              errors={useFormConfig?.formState.errors}
            >
              {options.map((option, i) => {
                return (
                  <Select.Option key={i} value={option.value}>
                    {option.label}
                  </Select.Option>
                );
              })}
            </Select>
            {useFormConfig.formState.errors && (
              <ErrorMessage
                errors={useFormConfig?.formState.errors}
                name={name}
                render={({ message }) => <p className={s.error}>{message}</p>}
              />
            )}
          </>
        )}
      />
    </div>
  );
};
