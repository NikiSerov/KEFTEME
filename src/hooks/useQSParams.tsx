import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useQSParams = (onParamsChange: (value: string) => void) => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    onParamsChange(searchParams.toString());
  }, [searchParams]);

  const handleFilterChange = (
    checkedValues: CheckboxValueType[],
    name: string,
  ) => {
    if (checkedValues.length) {
      setSearchParams((searchParams) => {
        searchParams.set(name, checkedValues.join(','));
        searchParams.set('page', '1');
        return searchParams;
      });
    } else {
      setSearchParams((searchParams) => {
        searchParams.delete(name);
        searchParams.set('page', '1');
        return searchParams;
      });
    }
  };

  const handleSortingChange = (sortParam: string) => {
    setSearchParams((searchParams) => {
      searchParams.set('sort', sortParam);
      searchParams.set('page', '1');
      return searchParams;
    });
  };

  const handlePagination = (page: string) => {
    setSearchParams((searchParams) => {
      searchParams.set('page', page);
      return searchParams;
    });
  };

  const selectedParams = Object.fromEntries(searchParams);

  return {
    handleFilterChange,
    handleSortingChange,
    handlePagination,
    selectedParams,
  };
};
