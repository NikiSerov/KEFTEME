import s from "./ProductCard.module.scss";

export const ProductCard = ({ name, price, color, id, pictureSrc }) => {
  return (
    <div className={s.productCard} id={id}>
      <div className={s.imageContainer}>
        <img src={pictureSrc} alt="Product" className={s.image} />
      </div>
      <span className={s.productName}>{name}</span>
      <span className={s.productColor}>{color}</span>
      <span className={s.productPrice}>${price}</span>
    </div>
  );
};
