import s from './FilterMenu.module.scss';
import { useEffect, useMemo } from 'react';
import { setFiltersThunk } from '../../../../store/thunks/filtersThunk';
import { useDispatch, useSelector } from 'react-redux';
import { SmileFilled } from '@ant-design/icons';
import { Collapse } from 'antd';
import { CheckboxGroup } from './components/CheckboxGroup/CheckboxGroup';
import { Loader } from '../../../../components/Loader/Loader';

const { Panel } = Collapse;

export const FilterMenu = ({
  onFilterChange,
  defaultValues,
  defaultActivePanels,
  setActivePanels,
  disabled,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFiltersThunk());
  }, []);

  const { filters, loading } = useSelector((state) => state.filters);

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
    <div className={s.filterMenu}>
      {loading ? (
        <div className={s.filterLoaderWrapper}>
          <Loader />
        </div>
      ) : (
        <Collapse
          className={s.collapse}
          activeKey={defaultActivePanels}
          onChange={(panels) => setActivePanels(panels)}
          collapsible={disabled ? 'disabled' : ''}
        >
          {checkboxGroups.map(({ header, name, options }) => {
            return (
              <Panel header={header} className={s.panel} key={name}>
                <CheckboxGroup
                  header={header}
                  name={name}
                  options={options}
                  onFilterChange={onFilterChange}
                  defaultValues={defaultValues}
                />
              </Panel>
            );
          })}
        </Collapse>
      )}
    </div>
  );
};
