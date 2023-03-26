import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useQSParams = ({ onParamsChange }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    onParamsChange(searchParams);
  }, [searchParams]);

  const handleFilterChange = (checkedValues, name) => {
    if (checkedValues.length) {
      setSearchParams((searchParams) => {
        searchParams.set(name, checkedValues);
        searchParams.set('page', 1);
        return searchParams;
      });
    } else {
      setSearchParams((searchParams) => {
        searchParams.delete(name);
        searchParams.set('page', 1);
        return searchParams;
      });
    }
  };

  const handleSortingChange = (sortParam) => {
    setSearchParams((searchParams) => {
      searchParams.set('sort', sortParam);
      searchParams.set('page', 1);
      return searchParams;
    });
  };

  const handlePagination = (page) => {
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
