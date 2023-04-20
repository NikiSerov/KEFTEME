import s from './FilterMenu.module.scss';
import { FC, useEffect, useMemo } from 'react';
import { setFiltersThunk } from '../../../../store/thunks/filtersThunk';
import { CloseOutlined, SmileFilled } from '@ant-design/icons';
import { Button, Collapse } from 'antd';
import { CheckboxGroup } from './components/CheckboxGroup/CheckboxGroup';
import { CollapsibleType } from 'antd/es/collapse/CollapsePanel';
import { useAppDispatch, useAppSelector } from '../../../../store/store';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import classNames from 'classnames';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';

interface FilterMenuProps {
  onFilterChange: (checkedValue: CheckboxValueType[], name: string) => void;
  defaultActivePanels: string | string[];
  defaultValues: CheckboxValueType[];
  setActivePanels: React.Dispatch<React.SetStateAction<string | string[]>>;
  disabled: boolean;
  isFilterMenuOpened: boolean;
  handleOpenFilterMenu: () => void;
}

const { Panel } = Collapse;

export const FilterMenu: FC<FilterMenuProps> = ({
  onFilterChange,
  defaultValues,
  defaultActivePanels,
  setActivePanels,
  disabled,
  isFilterMenuOpened,
  handleOpenFilterMenu,
}) => {
  const dispatch = useAppDispatch();
  const { width: screenWidth } = useWindowDimensions();

  useEffect(() => {
    dispatch(setFiltersThunk());
  }, []);

  const { filters, loading: isFiltersLoading } = useAppSelector(
    (state) => state.filters,
  );

  const colorOptions = filters?.colors?.map(({ color, id }) => {
    return {
      label: (
        <div className={s.colorOptionWrapper}>
          <SmileFilled
            style={{
              color: `${color}`,
              fontSize: '18px',
            }}
          />
          <span> {`${id.slice(0, 1).toUpperCase()}${id.slice(1)}`}</span>
        </div>
      ),
      value: id,
    };
  });

  const sizeOptions = filters?.sizes?.map(({ size, id }) => {
    return { label: size, value: id };
  });

  const typeOptions = filters?.types?.map(({ name, id }) => {
    return { label: name, value: id };
  });

  const checkboxGroups = useMemo(
    () => [
      {
        header: 'Colors',
        name: 'color',
        options: colorOptions,
      },
      {
        header: 'Sizes',
        name: 'size',
        options: sizeOptions,
      },
      {
        header: 'Types',
        name: 'type',
        options: typeOptions,
      },
    ],
    [typeOptions, colorOptions, sizeOptions],
  );

  return (
    <div
      className={classNames({
        [s.filterMenu]: true,
        [s.show]: isFilterMenuOpened,
      })}
    >
      <Collapse
        className={s.collapse}
        defaultActiveKey={defaultActivePanels}
        onChange={(panels) => setActivePanels(panels)}
        collapsible={disabled ? 'disabled' : ('' as CollapsibleType)}
      >
        {checkboxGroups.map(({ header, name, options }) => {
          return (
            <Panel header={header} className={s.panel} key={name}>
              <CheckboxGroup
                name={name}
                options={options}
                onFilterChange={onFilterChange}
                defaultValues={defaultValues}
                disabled={isFiltersLoading}
              />
            </Panel>
          );
        })}
      </Collapse>
      {screenWidth <= 920 && (
        <Button onClick={handleOpenFilterMenu} className={s.closeFilterMenuBtn}>
          Close filters
        </Button>
      )}
    </div>
  );

  // return (
  //   <div className={s.filterMenu}>
  //     {loading ? (
  //       <div className={s.filterLoaderWrapper}>
  //         <Loader />
  //       </div>
  //     ) : (
  //       <Collapse
  //         className={s.collapse}
  //         defaultActiveKey={defaultActivePanels}
  //         onChange={(panels) => setActivePanels(panels)}
  //         collapsible={disabled ? 'disabled' : ('' as CollapsibleType)}
  //       >
  //         {checkboxGroups.map(({ header, name, options }) => {
  //           return (
  //             <Panel header={header} className={s.panel} key={name}>
  //               <CheckboxGroup
  //                 name={name}
  //                 options={options}
  //                 onFilterChange={onFilterChange}
  //                 defaultValues={defaultValues}
  //               />
  //             </Panel>
  //           );
  //         })}
  //       </Collapse>
  //     )}
  //   </div>
  // );
};
