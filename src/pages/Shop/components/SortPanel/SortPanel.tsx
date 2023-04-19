import { Button, Select } from 'antd';
import s from './SortPanel.module.scss';
import { sortParams } from './constants';
import { FC } from 'react';
import classNames from 'classnames';
import { useAppSelector } from '../../../../store/store';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';

interface SortPanelProps {
  productsCount: number;
  onSortingChange: (sortParam: string) => void;
  selectedSorting?: string;
  handleOpenFilterMenu: () => void;
}

export const SortPanel: FC<SortPanelProps> = ({
  productsCount,
  onSortingChange,
  selectedSorting,
  handleOpenFilterMenu,
}) => {
  const { loading } = useAppSelector((state) => state.filters);
  const { width: screenWidth } = useWindowDimensions();

  let selectedSortParam = sortParams[0].value;
  if (selectedSorting) {
    const selectedOption = sortParams.find(
      (item) => item.value === selectedSorting,
    );
    selectedSortParam = selectedOption.value;
  }

  return (
    <div className={s.sortPanel}>
      {screenWidth <= 920 && (
        <Button
          className={classNames({
            [s.filterButton]: true,
          })}
          onClick={handleOpenFilterMenu}
          disabled={loading}
        >
          Filter
        </Button>
      )}
      <span className={s.productsCount}>{productsCount} product(s)</span>
      <Select
        className={s.sortSelect}
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
