import { Table, InputNumber } from "antd";

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
  },
  {
    title: "Product image",
    dataIndex: "productName",
    key: "productName",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
    render: (text) => (
      <InputNumber
        defaultValue={text}
        onChange={(value) => console.log(value)}
        min={1}
        max={10}
      />
    ),
  },
  {
    title: "Product total",
    dataIndex: "price",
    key: "price",
  },
];

export const CartTable = () => {
  const data = [
    {
      key: "1",
      orderID: "1",
      productName: "Snake King",
      quantity: 1,
      price: "$300",
    },
    {
      key: "2",
      orderID: "2",
      productName: "Molewalkers",
      quantity: 2,
      price: "$400",
    },
  ];
  return <Table columns={columns} dataSource={data} pagination={false} />;
};
