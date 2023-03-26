import { message } from 'antd';

export const useMessageApi = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Product added to cart!',
      className: 'custom-class',
      style: {
        marginTop: '110px',
      },
    });
  };

  const warning = () => {
    messageApi.open({
      type: 'warning',
      content: 'That product is already in your cart.',
      className: 'custom-class',
      style: {
        marginTop: '110px',
      },
    });
  };

  return { success, warning, contextHolder };
};
