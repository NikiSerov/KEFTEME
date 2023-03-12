import { DeleteOutlined } from "@ant-design/icons";
import { Button, Popover } from "antd";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../store/slices/cartSlice";
import { updateCart } from "../../store/thunks/updateCart";

export const DeleteFromCartBtn = ({ id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(updateCart(deleteProduct(id)));
  };
  return (
    <Popover content="Delete product">
      <Button onClick={handleDelete}>
        <DeleteOutlined />
      </Button>
    </Popover>
  );
};
