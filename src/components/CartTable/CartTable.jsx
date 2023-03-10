import { Table } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PRODUCT_ROUTE } from "../../constants/routes";
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
    render: (value) => <InputQuantity defaultValue={value} />,
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
  const tableData = cartProducts.map((product, i) => {
    return {
      key: i,
      index: i + 1,
      productName: product,
      productImage: product,
      quantity: product.quantity,
      productTotal: product.price * product.quantity,
    };
  });

  return (
    <Table
      columns={columns}
      dataSource={tableData}
      pagination={false}
      footer={() => <span className="{s.total}">Total: ${sum}</span>}
    />
  );
};
