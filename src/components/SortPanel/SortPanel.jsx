import { Select } from "antd";
import s from "./SortPanel.module.scss";

const sortOptions = [
  { value: "default", label: "Featured" },
  { value: "price_asc", label: "Price: Low to High" },
  { value: "price_desc", label: "Price: High to Low" },
  { value: "name_asc", label: "A - Z" },
  { value: "name_desc", label: "Z - A" },
];

export const SortPanel = ({ productsCount }) => {
  return (
    <div className={s.sortPanel}>
      <span className={s.productsCount}>{productsCount} products</span>
      <Select style={{ width: 200 }} defaultValue={sortOptions[0]}>
        {sortOptions.map((option) => (
          <Select.Option key={option.value} value={option.value}>
            {option.label}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};
