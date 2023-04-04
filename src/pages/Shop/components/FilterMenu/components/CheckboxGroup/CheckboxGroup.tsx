import { Checkbox, CheckboxOptionType } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { FC } from 'react';
import s from './CheckboxGroup.module.scss';

interface CheckboxGroupProps {
  name: string;
  options: CheckboxOptionType[];
  defaultValues: CheckboxValueType[];
  onFilterChange: (checkedValues: CheckboxValueType[], name: string) => void;
}

export const CheckboxGroup: FC<CheckboxGroupProps> = ({
  name,
  options,
  onFilterChange,
  defaultValues,
}) => {
  return (
    <>
      <Checkbox.Group
        style={{ width: '100%' }}
        options={options}
        className={s.checkboxGroup}
        name={name}
        onChange={(checkedValues) => onFilterChange(checkedValues, name)}
        defaultValue={defaultValues}
      />
    </>
  );
};
