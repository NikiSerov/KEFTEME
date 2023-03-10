import { useEffect, useState } from "react";
import { FilterMenu } from "../../components/FilterMenu/FilterMenu";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { SortPanel } from "../../components/SortPanel/SortPanel";
import s from "./Shop.module.scss";
import { getProducts } from "../../api/productsAPI";
import { Link } from "react-router-dom";
import { PRODUCT_ROUTE } from "../../constants/routes";
import { Loader } from "../../components/Loader/Loader";

export const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((resp) => setProducts(resp.data));
  }, []);

  return (
    <div className={s.shop}>
      <FilterMenu />
      <div className={s.wrapper}>
        {products.length ? (
          <>
            <SortPanel productsCount={products.length} />
            <div className={s.productsContainer}>
              {products.map((product) => {
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
              })}
            </div>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};
