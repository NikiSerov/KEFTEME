import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import s from './ProductPage.module.scss';
import { getProduct } from '../../api/productsAPI';
import { Loader } from '../../components/Loader/Loader';
import { addProduct } from '../../store/slices/cartSlice';
import { Divider } from 'antd';
import { updateCart } from '../../store/thunks/updateCart';
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { CART_ROUTE } from '../../constants/routes';
import { Helmet } from '../../components/Helmet/Helmet';
import { useMessageApi } from '../../hooks/useMessageApi';
import { useAppDispatch, useAppSelector } from '../../store/store';

export const ProductPage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { success, warning, contextHolder } = useMessageApi();

  const [product, setProduct] = useState(null);
  const [isAddButton, setIsAddButton] = useState(true);

  const { id } = useParams();

  const productInCart = useAppSelector((state) =>
    state.cart.products.find((product) => product.id === Number(id)),
  );

  const getProductById = async (id: number) => {
    const [product] = await getProduct(id);
    return product;
  };

  useEffect(() => {
    getProductById(+id).then((product) => setProduct(product));
  }, [id]);

  const handleGoToCart = () => {
    navigate(CART_ROUTE);
  };

  const handleAdd = () => {
    setIsAddButton(false);
    dispatch(updateCart(addProduct(product)));
    !!productInCart ? warning() : success();
  };

  if (!product) {
    return <Loader />;
  }

  return (
    <>
      <Helmet title={product.name} />
      {contextHolder}
      <div className={s.productPage}>
        <div className={s.imageContainer}>
          <img
            src={product.picture}
            alt={product.name}
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
            {isAddButton ? (
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
    </>
  );
};
