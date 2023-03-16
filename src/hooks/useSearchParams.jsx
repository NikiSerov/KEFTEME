import { useEffect, useState } from "react";
import queryString from "query-string";
import { useNavigate } from "react-router-dom";
import { defaultLimit } from "../constants/constants";

export const useSearchParams = (initialParams, onParamsChange) => {
  const [selectedParams, setSelectedParams] = useState({
    ...initialParams,
    limit: defaultLimit,
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
    }));
  };

  const handleSortingChange = (sortParam) => {
    setSelectedParams((prevState) => ({
      ...prevState,
      sort: sortParam,
    }));
  };

  const handlePagination = (page) => {
    setSelectedParams((prevState) => ({
      ...prevState,
      page,
    }));
  };

  return { handleFilterChange, handleSortingChange, handlePagination };
};
