import { Collapse, Checkbox } from "antd";
import s from "./FilterMenu.module.scss";

const { Panel } = Collapse;

const departmentOptions = [
  { label: "Shoes", value: "shoes" },
  { label: "Sandals", value: "sandals" },
  { label: "Sneakers", value: "sneakers" },
];

const colorOptions = [
  { label: "Black", value: "black" },
  { label: "Brown", value: "brown" },
  { label: "Grey", value: "grey" },
  { label: "Yellow", value: "yellow" },
  { label: "Red", value: "red" },
  { label: "Green", value: "green" },
  { label: "White", value: "white" },
];

const sizeOptions = [
  { label: "36", value: "36" },
  { label: "38", value: "38" },
  { label: "40", value: "40" },
  { label: "42", value: "42" },
  { label: "44", value: "44" },
];

export const FilterMenu = () => {
  return (
    <div className={s.filterMenu}>
      <Collapse className={s.collapse}>
        <Panel header="Type" className={s.panel}>
          <Checkbox.Group
            style={{ width: "100%" }}
            options={departmentOptions}
            className={s.checkboxGroup}
          />
        </Panel>
        <Panel header="Color" className={s.panel}>
          <Checkbox.Group
            style={{ width: "100%" }}
            options={colorOptions}
            className={s.checkboxGroup}
          />
        </Panel>
        <Panel header="Size" className={s.panel}>
          <Checkbox.Group
            style={{ width: "100%" }}
            options={sizeOptions}
            className={s.checkboxGroup}
          />
        </Panel>
      </Collapse>
    </div>
  );
};
