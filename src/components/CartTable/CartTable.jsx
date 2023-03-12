import { Table } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PRODUCT_ROUTE } from "../../constants/routes";
import { DeleteFromCartBtn } from "../DeleteFromCartBtn/DeleteFromCartBtn";
import { InputQuantity } from "../InputQuantity/InputQuantity";
import s from "./CartTable.module.scss";

const columns = [
  {
    title: "№",
    dataIndex: "index",
    key: "index",
  },
  {
    title: "Product name",
    dataIndex: "productName",
    key: "productName",
    render: (product) => (
      <Link to={`${PRODUCT_ROUTE}/${product.id}`}>
        <span>{product.name}</span>
      </Link>
    ),
  },
  {
    title: "Product image",
    dataIndex: "productImage",
    key: "productImage",
    render: (product) => (
      <Link
        to={`${PRODUCT_ROUTE}/${product.id}`}
        className={s.productImageLink}
      >
        <img src={product.picture} alt="Product" className={s.productImage} />
      </Link>
    ),
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
    render: ({ quantity, id }) => (
      <div className={s.quantityWrapper}>
        <InputQuantity defaultValue={quantity} id={id} />
        <DeleteFromCartBtn id={id} />
      </div>
    ),
  },
  {
    title: "Product total",
    dataIndex: "productTotal",
    key: "productTotal",
  },
];

export const CartTable = () => {
  const cartProducts = useSelector((state) => state.cart.products);
  const sum = useSelector((state) => state.cart.sum);
  const emptyText = "Your cart is empty";
  const tableData = cartProducts.map((product, i) => {
    return {
      key: i,
      index: i + 1,
      productName: product,
      productImage: product,
      quantity: product,
      productTotal: `$${+(product.price * product.quantity).toFixed(2)}`,
    };
  });

  return (
    <Table
      columns={columns}
      dataSource={tableData}
      pagination={false}
      locale={{ emptyText }}
      footer={() => !!sum && <div className={s.total}>Total: ${sum}</div>}
    />
  );
};
