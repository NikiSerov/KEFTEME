import { Table } from "antd";
import { useSelector } from "react-redux";
import { emptyCartText } from "./constants";
import { useCartTable } from './hooks/useCartTable'

export const OrdersTable = () => {
  const { orders } = useSelector((state) => state.orders);
  const {columns, tableData} = useCartTable(orders);

  return (
    <Table
      columns={columns}
      dataSource={tableData}
      pagination={false}
      locale={{ emptyText: emptyCartText }}
    />
  );
};
