import { Checkbox } from "antd";
import s from "./CheckboxGroup.module.scss";

export const CheckboxGroup = ({
  name,
  options,
  onFilterChange,
  defaultValues,
}) => {
  return (
    <Checkbox.Group
      style={{ width: "100%" }}
      options={options}
      className={s.checkboxGroup}
      name={name}
      onChange={(array) => onFilterChange(array, name)}
      defaultValue={defaultValues}
    />
  );
};
