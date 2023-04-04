import { Table } from 'antd';
import { emptyCartText } from './constants';
import { useOrdersTable } from './hooks/useOrdersTable';
import { useAppSelector } from '../../../../store/store';
import { FC } from 'react';

export const OrdersTable: FC = () => {
  const { orders } = useAppSelector((state) => state.orders);
  const { columns, tableData } = useOrdersTable(orders);

  return (
    <Table
      columns={columns}
      dataSource={tableData}
      pagination={false}
      locale={{ emptyText: emptyCartText }}
    />
  );
};
