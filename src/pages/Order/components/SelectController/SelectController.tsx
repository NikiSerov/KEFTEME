import { ErrorMessage } from '@hookform/error-message';
import { Select } from 'antd';
import { FC } from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';
import { SelectOption } from '../../../../types/types';
import s from './Select.module.scss';

interface SelectControllerProps {
  name: string;
  useFormConfig: UseFormReturn;
  options: SelectOption[];
  wrapperClass: string;
  label?: string;
}

export const SelectController: FC<SelectControllerProps> = ({
  name,
  useFormConfig,
  options,
  wrapperClass,
  label,
}) => {
  return (
    <div className={wrapperClass}>
      {!!label && <p className={s.selectLabel}>{label}</p>}
      <Controller
        control={useFormConfig.control}
        name={name}
        render={({ field }) => (
          <>
            <Select {...field} placeholder="Choose delivery">
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
