import { Select } from "antd";
import s from "./SortPanel.module.scss";

const sortParams = [
  { value: "default", label: "Featured" },
  { value: "price-ASC", label: "Price: Low to High" },
  { value: "price-DESC", label: "Price: High to Low" },
  { value: "name-ASC", label: "A - Z" },
  { value: "name-DESC", label: "Z - A" },
];

export const SortPanel = ({
  productsCount,
  onSortingChange,
  selectedSorting,
}) => {
  let selectedSortParam = sortParams[0];
  if (selectedSorting) {
    selectedSortParam = sortParams.find(
      (item) => item.value === selectedSorting
    );
  }

  return (
    <div className={s.sortPanel}>
      <span className={s.productsCount}>{productsCount} product(s)</span>
      <Select
        style={{ width: 200 }}
        value={selectedSortParam}
        onChange={onSortingChange}
      >
        {sortParams.map((option) => (
          <Select.Option key={option.value} value={option.value}>
            {option.label}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};
