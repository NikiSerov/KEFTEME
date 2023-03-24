import { FilterMenu } from "./components/FilterMenu/FilterMenu";
import { ProductCard } from "./components/ProductCard/ProductCard";
import { SortPanel } from "./components/SortPanel/SortPanel";
import s from "./Shop.module.scss";
import { Link } from "react-router-dom";
import { PRODUCT_ROUTE } from "../../constants/routes";
import { Loader } from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { setProductsThunk } from "../../store/thunks/productsThunk";
import { useQSParams } from "../../hooks/useQSParams";
import { Pagination } from "antd";
import { defaultLimit } from "../../constants/constants";
import { Helmet } from "../../components/Helmet/Helmet";
import { useEffect, useState } from "react";
import { getActivePanels } from "../../utils/utils";

export const Shop = () => {
  const dispatch = useDispatch();
  const { products, loading, total } = useSelector((state) => state.products);
  const [activePanels, setActivePanels] = useState([]);
  const [selectedSorting, setSelectedSorting] = useState("");

  const onParamsChange = (queryStr) => {
    dispatch(setProductsThunk(queryStr));
  };

  const {
    handleFilterChange,
    handleSortingChange,
    handlePagination,
    selectedParams,
  } = useQSParams({ onParamsChange });

  const { sort, color, size, type, page } = selectedParams;

  const defaultSelectedFilters = [color, size, type]
    .map((value) => {
      return value?.split(",") || "";
    })
    .flat();

  useEffect(() => {
    setActivePanels(getActivePanels({ color, size, type }));
  }, [color, size, type]);

  useEffect(() => {
    setSelectedSorting(sort);
  }, [sort]);

  const onPaginationChange = (page) => {
    handlePagination(page);
  };

  return (
    <>
      <Helmet title="KEFTEME" />
      <div className={s.shop}>
        <FilterMenu
          onFilterChange={handleFilterChange}
          defaultValues={defaultSelectedFilters}
          defaultActivePanels={activePanels}
          setActivePanels={setActivePanels}
        />
        <div className={s.wrapper}>
          <SortPanel
            productsCount={total}
            onSortingChange={handleSortingChange}
            selectedSorting={selectedSorting}
          />
          <div className={s.productsContainer}>
            {loading ? (
              <Loader />
            ) : (
              products.map((product) => {
                return (
                  <Link
                    to={`${PRODUCT_ROUTE}/${product.id}`}
                    className={s.productLink}
                    key={product.id}
                  >
                    <ProductCard
                      pictureSrc={product.picture}
                      name={product.name}
                      color={product.color}
                      price={product.price}
                      id={product.id}
                    />
                  </Link>
                );
              })
            )}
          </div>
          <div className={s.paginationContainer}>
            {!loading && (
              <Pagination
                current={+page || 1}
                total={total}
                onChange={onPaginationChange}
                hideOnSinglePage={true}
                pageSize={defaultLimit}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
