import { Helmet as ReactHelmet } from "react-helmet";

export const Helmet = ({ title }) => {
  return (
    <ReactHelmet>
      <title>{title}</title>
    </ReactHelmet>
  );
};
