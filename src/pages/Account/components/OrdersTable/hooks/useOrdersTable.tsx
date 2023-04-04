import s from '../OrdersTable.module.scss';
import { Link } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../../../../../constants/routes';
import { useMemo } from 'react';
import { Order, Product } from '../../../../../types/types';
import { ColumnsType } from 'antd/es/table';

interface ColumnsData {
  key: number;
  orderID: string;
  products: (Product & {
    quantity: number;
  })[];
  date: string;
  status: string;
  total: string;
}

const columns: ColumnsType<ColumnsData> = [
  {
    title: 'ID',
    dataIndex: 'orderID',
    key: 'orderID',
    width: 80,
    align: 'center',
  },
  {
    title: 'Products',
    dataIndex: 'products',
    key: 'products',
    align: 'center',
    render: (products) => (
      <div className={s.productsWrapper}>
        {products.map((product, i) => {
          return (
            <Link to={`${PRODUCT_ROUTE}/${product.id}`} key={i}>
              <img
                src={product.picture}
                alt={`Product ${product.name}`}
                className={s.productImage}
              />
            </Link>
          );
        })}
      </div>
    ),
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    width: 200,
    align: 'center',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    width: 130,
    align: 'center',
    render: (status) => (status === 1 ? 'In process' : 'Delivered'),
  },
  {
    title: 'Order total',
    dataIndex: 'total',
    key: 'total',
    width: 130,
    align: 'center',
  },
];

export const useOrdersTable = (orders: Order[]) => {
  const tableData = useMemo(
    () =>
      orders.map((order, i) => {
        return {
          key: i,
          orderID: order.id.slice(0, 5),
          products: order.products,
          date: new Date(order.date).toLocaleString(),
          status: order.status,
          total: `$${order.sum}`,
        };
      }),
    [orders],
  );

  return { columns, tableData };
};
