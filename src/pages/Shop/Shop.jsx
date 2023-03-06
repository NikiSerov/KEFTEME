import { useSelector } from "react-redux";
import { FilterMenu } from "../../components/FilterMenu/FilterMenu";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { SortPanel } from "../../components/SortPanel/SortPanel";
import s from "./Shop.module.scss";

export const Shop = () => {
  const products = useSelector((state) => state.products);
  return (
    <div className={s.shop}>
      <FilterMenu />
      <div className={s.wrapper}>
        <SortPanel productsCount="4" />
        <div className={s.productsContainer}>
          {products.map((product) => {
            return (
              <ProductCard
                pictureSrc={product.pictureSrc}
                key={product.id}
                name={product.name}
                color={product.color}
                price={product.price}
                id={product.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
