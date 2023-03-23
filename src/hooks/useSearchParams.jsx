import { useEffect, useState } from "react";
import queryString from "query-string";
import { useNavigate } from "react-router-dom";

export const useSearchParams = ({ onParamsChange }) => {
  const initialParams = queryString.parse(window.location.search, {
    arrayFormat: "comma",
  });
  const [selectedParams, setSelectedParams] = useState({
    ...initialParams,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const queryStr = queryString.stringify(selectedParams, {
      arrayFormat: "comma",
    });
    navigate({
      search: queryStr,
    });
    onParamsChange(queryStr);
  }, [selectedParams]);

  const handleFilterChange = (checkedValues, name) => {
    setSelectedParams((prevState) => ({
      ...prevState,
      [name]: checkedValues,
      page: 1,
    }));
  };

  const handleSortingChange = (sortParam) => {
    setSelectedParams((prevState) => ({
      ...prevState,
      sort: sortParam,
      page: 1,
    }));
  };

  const handlePagination = (page) => {
    setSelectedParams((prevState) => ({
      ...prevState,
      page,
    }));
  };

  return {
    handleFilterChange,
    handleSortingChange,
    handlePagination,
    initialParams,
  };
};
