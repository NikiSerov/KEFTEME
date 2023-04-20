import { DeleteOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd';
import { Link } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../../constants/routes';
import { deleteProduct } from '../../store/slices/cartSlice';
import { updateCart } from '../../store/thunks/updateCart';
import { InputQuantity } from '../InputQuantity/InputQuantity';
import s from './CartTable.module.scss';
import { emptyText } from './constants';
import CountUp from 'react-countup';
import { FC, Key } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { ColumnsType } from 'antd/es/table';
import { Product } from '../../types/types';

interface CartTableProps {
  isCartPage?: boolean;
  classname?: string;
}

interface ColumnData {
  key: Key;
  index: number;
  productName: Product;
  productImage: Product;
  quantity: {
    product: Product;
    handleDelete: (id: number) => void;
    isCartPage: boolean;
  };
  productTotal: number;
}

const columns: ColumnsType<ColumnData> = [
  {
    title: '№',
    dataIndex: 'index',
    key: 0,
    align: 'center',
  },
  {
    title: 'Product name',
    dataIndex: 'productName',
    key: 1,
    align: 'center',
    render: (product) => (
      <Link to={`${PRODUCT_ROUTE}/${product.id}`}>
        <span>{product.name}</span>
      </Link>
    ),
  },
  {
    title: 'Product image',
    dataIndex: 'productImage',
    key: 2,
    align: 'center',
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
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 3,
    align: 'center',
    render: ({ product, handleDelete, isCartPage }) =>
      isCartPage ? (
        <div className={s.quantityWrapper}>
          <InputQuantity defaultValue={product.quantity} id={product.id} />
          <Button
            onClick={() => handleDelete(product.id)}
            className={s.deleteBtn}
          >
            <DeleteOutlined />
          </Button>
        </div>
      ) : (
        <span>{product.quantity}</span>
      ),
  },
  {
    title: 'Product total',
    dataIndex: 'productTotal',
    key: 4,
    align: 'center',
    render: (total) => (
      <CountUp
        end={total}
        decimals={2}
        duration={0.7}
        preserveValue={true}
        separator={''}
        prefix={'$'}
      />
    ),
  },
];

export const CartTable: FC<CartTableProps> = ({ isCartPage, classname }) => {
  const cartProducts = useAppSelector((state) => state.cart.products);
  const sum = useAppSelector((state) => state.cart.sum);

  const dispatch = useAppDispatch();
  const handleDelete = (id) => {
    dispatch(updateCart(deleteProduct(id)));
  };
  const tableData: ColumnData[] = cartProducts.map((product, i) => {
    return {
      key: i,
      index: i + 1,
      productName: product,
      productImage: product,
      quantity: { product, handleDelete, isCartPage },
      productTotal: +(product.price * product.quantity).toFixed(2),
    };
  });

  return (
    <Table
      columns={columns}
      className={classname}
      dataSource={tableData}
      pagination={false}
      locale={{ emptyText }}
      footer={() =>
        !!sum && (
          <div className={s.total}>
            <span>Total: </span>
            <CountUp
              end={sum}
              decimals={2}
              duration={0.7}
              preserveValue={true}
              separator={''}
              prefix={'$'}
            />
          </div>
        )
      }
    />
  );
};
