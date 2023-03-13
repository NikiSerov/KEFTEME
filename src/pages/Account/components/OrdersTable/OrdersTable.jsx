import { Table } from "antd";
import { useSelector } from "react-redux";
import { emptyText } from "./constants";
import s from "./OrdersTable.module.scss";

const columns = [
  {
    title: "ID",
    dataIndex: "orderID",
    key: "orderID",
    width: 80,
    align: "center",
  },
  {
    title: "Products",
    dataIndex: "products",
    key: "products",
    align: "center",
    render: (products) => (
      <div className={s.productsContainer}>
        {products.map((product, i) => {
          return (
            <div key={i} className={s.productWrapper}>
              <img src={product.picture} alt={`Product ${product.name}`} />
              zazaz
            </div>
          );
        })}
      </div>
    ),
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    width: 200,
    align: "center",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: 130,
    align: "center",
    render: (status) => (status === 1 ? "In process" : "Delivered"),
  },
  {
    title: "Order total",
    dataIndex: "total",
    key: "total",
    width: 130,
    align: "center",
  },
];

export const OrdersTable = () => {
  const orders = useSelector((state) => state.orders);

  const tableData = orders.map((order, i) => {
    return {
      key: i,
      orderID: order.id.slice(0, 5),
      products: order.products,
      date: new Date(order.date).toLocaleString(),
      status: order.status,
      total: `$${order.sum}`,
    };
  });

  return (
    <Table
      columns={columns}
      dataSource={tableData}
      pagination={false}
      locale={{ emptyText }}
    />
  );
};
