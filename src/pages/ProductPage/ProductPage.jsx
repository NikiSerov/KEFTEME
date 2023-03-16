import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import s from "./ProductPage.module.scss";
import { getProduct } from "../../api/productsAPI";
import { Loader } from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../store/slices/cartSlice";
import { Divider, message } from "antd";
import { updateCart } from "../../store/thunks/updateCart";
import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { CART_ROUTE } from "../../constants/routes";

export const ProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [isAdd, setIsAdd] = useState(true);

  const { id } = useParams();

  const [messageApi, contextHolder] = message.useMessage();

  const productInCart = useSelector((state) =>
    state.cart.products.find((product) => product.id === Number(id))
  );

  useEffect(() => {
    getProduct(id).then((resp) => setProduct(resp));
  }, [id]);

  const handleGoToCart = () => {
    navigate(CART_ROUTE);
  };

  const handleAdd = () => {
    setIsAdd(false);
    dispatch(updateCart(addProduct(product)));
    !!productInCart ? warning() : success();
  };

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Product added to cart!",
      className: "custom-class",
      style: {
        marginTop: "110px",
      },
    });
  };

  const warning = () => {
    messageApi.open({
      type: "warning",
      content: "That product is already in your cart.",
      className: "custom-class",
      style: {
        marginTop: "110px",
      },
    });
  };

  return !!product ? (
    <div className={s.productPage}>
      {contextHolder}
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
          <Divider />
          <p className={s.productDescription}>{product.description}</p>
          <Divider />
          <div className={s.productStats}>
            <p className={s.productSize}>Size: {product.size}</p>
            <p className={s.productPrice}>${product.price}</p>
          </div>
          <Divider />
        </div>
        <>
          {isAdd ? (
            <Button size="large" onClick={handleAdd}>
              Add to cart
            </Button>
          ) : (
            <Link to={CART_ROUTE}>
              <Button size="large" onClick={handleGoToCart}>
                Go to cart
              </Button>
            </Link>
          )}
        </>
      </div>
    </div>
  ) : (
    <Loader />
  );
};
