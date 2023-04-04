import { Input, InputRef } from 'antd';
import { ErrorMessage } from '@hookform/error-message';
import s from './Input.module.scss';
import { forwardRef } from 'react';
import { FieldErrors, FieldValues } from 'react-hook-form';

type InputFieldProps = {
  errors: FieldErrors<FieldValues>;
  placeHolder: string;
  name: string;
  type?: string;
  value: string;
  onChange: (...event: any[]) => void;
  onBlur: VoidFunction;
};

export const InputField = forwardRef<InputRef, InputFieldProps>(
  (
    { placeHolder, name, errors, type = 'text', value, onChange, onBlur },
    ref,
  ) => {
    return (
      <div className={s.inputContainer}>
        <Input
          placeholder={placeHolder}
          type={type}
          name={name}
          ref={ref}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
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
  },
);
