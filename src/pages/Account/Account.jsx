import s from "./Account.module.scss";
import { Table } from "antd";

const columns = [
  {
    title: "№",
    dataIndex: "orderID",
    key: "orderID",
  },
  {
    title: "Products",
    dataIndex: "products",
    key: "products",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
  },
];

const data = [
  {
    key: "2",
    orderID: "2",
    products: "Snake King, Crocodiloes",
    date: "22.06.2015",
    status: "Ordered",
    total: "$300",
  },
  {
    key: "1",
    orderID: "1",
    products: "Abibas, Molewalkers",
    date: "14.11.2012",
    status: "In process",
    total: "$400",
  },
];

export const Account = () => {
  return (
    <div className={s.accountPage}>
      <h1 className={s.accountHeading}>Your account</h1>
      <div className={s.userData}>
        <span className={s.userName}>
          <span className={s.accentText}>Name:</span> Nikita Serov
        </span>
        <span className={s.userLogin}>
          <span className={s.accentText}>Login:</span> Nikita1997
        </span>
        <span className={s.userEmail}>
          <span className={s.accentText}>Email:</span> nikitaserov1997@gmail.com
        </span>
      </div>
      <div className={s.usersOrders}>
        <h2 className={s.usersOrdersHeading}>Your orders</h2>
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    </div>
  );
};
