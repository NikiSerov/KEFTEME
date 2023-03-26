import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

export const MobileMenu = () => {
  const items = [
    {
      label: "Shop",
      key: "0",
    },
    {
      label: "Log in",
      key: "1",
    },

    {
      label: "3rd menu item",
      key: "3",
    },
  ];
  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={["click"]}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 40 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_3_2)">
          <path
            d="M0 0H40V0C40 2.20914 38.2091 4 36 4H4C1.79086 4 0 2.20914 0 0V0Z"
            fill="white"
          />
          <path
            d="M0 28C0 25.7909 1.79086 24 4 24H36C38.2091 24 40 25.7909 40 28V28H0V28Z"
            fill="white"
          />
          <path
            d="M4 14C4 12.8954 4.89543 12 6 12H34C35.1046 12 36 12.8954 36 14V14C36 15.1046 35.1046 16 34 16H6C4.89543 16 4 15.1046 4 14V14Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_3_2">
            <rect width="40" height="28" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Dropdown>
  );
};
