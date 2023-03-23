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
import { defaultLimit } from "../../constants/constants";
import { Helmet } from "react-helmet";

export const Shop = () => {
  const dispatch = useDispatch();
  const { products, loading, total } = useSelector((state) => state.products);

  const onParamsChange = (queryStr) => {
    dispatch(setProductsThunk(queryStr));
  };

  const {
    handleFilterChange,
    handleSortingChange,
    handlePagination,
    selectedParams,
  } = useSearchParams({ onParamsChange });

  const { sort, color, size, type, page } = selectedParams;

  const initialFilters = [color, size, type]
    .map((value) => {
      return value || "";
    })
    .flat();

  const defaultActivePanels = Object.values({
    color: color && "color",
    size: size && "size",
    type: type && "type",
  });

  const onPaginationChange = (page) => {
    handlePagination(page);
  };

  return (
    <div className={s.shop}>
      <Helmet>
        <title>KEFTEME</title>
      </Helmet>
      <FilterMenu
        onFilterChange={handleFilterChange}
        defaultValues={initialFilters}
        defaultActivePanels={defaultActivePanels}
      />
      <div className={s.wrapper}>
        <SortPanel
          productsCount={total}
          onSortingChange={handleSortingChange}
          defaultValue={sort}
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
  );
};
