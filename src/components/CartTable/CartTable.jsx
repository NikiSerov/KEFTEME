import { DeleteOutlined } from "@ant-design/icons";
import { Button, Popover, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PRODUCT_ROUTE } from "../../constants/routes";
import { deleteProduct } from "../../store/slices/cartSlice";
import { updateCart } from "../../store/thunks/updateCart";
import { InputQuantity } from "../InputQuantity/InputQuantity";
import s from "./CartTable.module.scss";
import { emptyText } from "./constants";

const columns = [
  {
    title: "№",
    dataIndex: "index",
    key: "index",
    align: "center",
  },
  {
    title: "Product name",
    dataIndex: "productName",
    key: "productName",
    align: "center",
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
    align: "center",
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
    align: "center",
    render: ({ product, handleDelete, isCartPage }) =>
      isCartPage ? (
        <div className={s.quantityWrapper}>
          <InputQuantity defaultValue={product.quantity} id={product.id} />
          <Popover content="Delete product">
            <Button onClick={() => handleDelete(product.id)}>
              <DeleteOutlined />
            </Button>
          </Popover>
        </div>
      ) : (
        <span>{product.quantity}</span>
      ),
  },
  {
    title: "Product total",
    dataIndex: "productTotal",
    key: "productTotal",
    align: "center",
  },
];

export const CartTable = ({ isCartPage, classname }) => {
  const cartProducts = useSelector((state) => state.cart.products);
  const sum = useSelector((state) => state.cart.sum);

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(updateCart(deleteProduct(id)));
  };
  const tableData = cartProducts.map((product, i) => {
    return {
      key: i,
      index: i + 1,
      productName: product,
      productImage: product,
      quantity: { product, handleDelete, isCartPage },
      productTotal: `$${+(product.price * product.quantity).toFixed(2)}`,
    };
  });

  return (
    <Table
      columns={columns}
      className={classname}
      dataSource={tableData}
      pagination={false}
      locale={{ emptyText }}
      footer={() => !!sum && <div className={s.total}>Total: ${sum}</div>}
    />
  );
};
