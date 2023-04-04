import { FC } from 'react';
import s from './ProductCard.module.scss';

interface ProductCardProps {
  name: string;
  price: number;
  color: string;
  id: number;
  pictureSrc: string;
}

export const ProductCard: FC<ProductCardProps> = ({
  name,
  price,
  color,
  id,
  pictureSrc,
}) => {
  return (
    <div className={s.productCard} id={id.toString()}>
      <div className={s.imageContainer}>
        <img src={pictureSrc} alt="Product" className={s.image} />
      </div>
      <span className={s.productName}>{name}</span>
      <span className={s.productColor}>{color}</span>
      <span className={s.productPrice}>${price}</span>
    </div>
  );
};
