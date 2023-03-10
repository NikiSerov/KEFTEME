import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import s from "./ProductPage.module.scss";
import { getProduct } from "../../api/productsAPI";
import { Loader } from "../../components/Loader/Loader";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/slices/cartSlice";
import { AddProductBtn } from "../../components/AddProductBtn/AddProductBtn";

export const ProductPage = () => {
  const { id } = useParams();
  const productId = Number(id);
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addProduct(product));
  };

  useEffect(() => {
    getProduct(productId).then((resp) => setProduct(resp));
  }, [productId]);

  return !!product ? (
    <div className={s.productPage}>
      <div className={s.imageContainer}>
        <img
          src={product.picture}
          alt={`Pciture of ${product.name}`}
          className={s.productImage}
        />
      </div>
      <div className={s.productDataWrapper}>
        <div className={s.productData}>
          <div className={s.productHeading}>
            <h1 className={s.productName}>{product.name}</h1>
            <p className={s.productColor}>{product.color}</p>
          </div>
          <p className={s.productDescription}>{product.description}</p>
          <div className={s.productStats}>
            <p className={s.productSize}>Size: {product.size}</p>
            <p className={s.productPrice}>${product.price}</p>
          </div>
        </div>
        <AddProductBtn handleAddClick={addToCart} productId={productId} />
      </div>
    </div>
  ) : (
    <Loader />
  );
};
