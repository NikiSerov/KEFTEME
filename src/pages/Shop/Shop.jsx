import { FilterMenu } from "./components/FilterMenu/FilterMenu";
import { ProductCard } from "./components/ProductCard/ProductCard";
import { SortPanel } from "./components/SortPanel/SortPanel";
import s from "./Shop.module.scss";
import { Link } from "react-router-dom";
import { PRODUCT_ROUTE } from "../../constants/routes";
import { Loader } from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { setProductsThunk } from "../../store/thunks/productsThunk";
import { useSearchParams } from "../../hooks/useSearchParams";
import { Pagination } from "antd";
import { useState } from "react";

export const Shop = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);
  const [currentPage, setCurrentPage] = useState(1);

  const urlSearchParams = new URLSearchParams(window.location.search);
  const initialParams = Object.fromEntries(urlSearchParams.entries());
  const { sort: initialSort, color, size, type, page } = initialParams;
  const initialFilters = [color, size, type]
    .map((value) => {
      return value ? value.split(",") : "";
    })
    .flat();
  const defaultActivePanels = Object.values({
    color: color && "color",
    size: size && "size",
    type: type && "type",
  });

  const onParamsChange = (queryStr) => {
    dispatch(setProductsThunk(queryStr));
  };

  const { handleFilterChange, handleSortingChange, handlePagination } =
    useSearchParams(initialParams, onParamsChange);

  const onPaginationChange = (page) => {
    handlePagination(page);
    setCurrentPage(page);
  };

  return (
    <div className={s.shop}>
      <FilterMenu
        onFilterChange={handleFilterChange}
        defaultValues={initialFilters}
        defaultActivePanels={defaultActivePanels}
      />
      <div className={s.wrapper}>
        <SortPanel
          productsCount={products.length}
          onSortingChange={handleSortingChange}
          defaultValue={initialSort}
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
              current={currentPage}
              total={16}
              onChange={onPaginationChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};
