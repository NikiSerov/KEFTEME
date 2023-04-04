import { Controller, FieldValues, UseFormReturn } from 'react-hook-form';
import { InputField } from '../InputField/InputField';
import { FC } from 'react';
import { Input } from '../../types/types';

interface InputControllerProps {
  useFormConfig: UseFormReturn<FieldValues, any>;
  input: Input;
}

export const InputController: FC<InputControllerProps> = ({
  useFormConfig,
  input,
}) => {
  return (
    <Controller
      name={input.name}
      control={useFormConfig?.control}
      defaultValue=""
      render={({ field }) => (
        <InputField
          errors={useFormConfig?.formState.errors}
          {...input}
          {...field}
        />
      )}
    />
  );
};
