import { Input } from 'antd';
import { ErrorMessage } from '@hookform/error-message';
import s from './Input.module.scss';
import { forwardRef } from 'react';
import { CompoundedComponent } from 'antd/es/float-button/interface';
import { FieldErrors, FieldValues } from 'react-hook-form';

type InputFieldProps = {
  classname: string;
  errors: FieldErrors<FieldValues>;
  placeHolder: string;
  name: string;
  type?: string;
};

type Ref = CompoundedComponent;

export const InputField = forwardRef<InputFieldProps, Ref>(
  ({ placeHolder, classname, name, errors, type = 'text', ...props }, ref) => {
    return (
      <div className={s.inputContainer}>
        <Input
          placeholder={placeHolder}
          className={classname}
          type={type}
          name={name}
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
  },
);
