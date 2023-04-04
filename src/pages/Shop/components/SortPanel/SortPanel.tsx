import { Select } from 'antd';
import s from './SortPanel.module.scss';
import { sortParams } from './constants';
import { FC } from 'react';

interface SortPanelProps {
  productsCount: number;
  onSortingChange: (sortParam: string) => void;
  selectedSorting?: string;
}

export const SortPanel: FC<SortPanelProps> = ({
  productsCount,
  onSortingChange,
  selectedSorting,
}) => {
  let selectedSortParam = sortParams[0].value;
  if (selectedSorting) {
    const selectedOption = sortParams.find(
      (item) => item.value === selectedSorting,
    );
    selectedSortParam = selectedOption.value;
  }

  return (
    <div className={s.sortPanel}>
      <span className={s.productsCount}>{productsCount} product(s)</span>
      <Select
        style={{ width: 200 }}
        value={selectedSortParam}
        onChange={onSortingChange}
        disabled={!productsCount}
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
