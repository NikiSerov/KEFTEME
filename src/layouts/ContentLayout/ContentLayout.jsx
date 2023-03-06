import s from "./ContentLayout.module.scss";

export const ContentLayout = ({ children }) => {
  return <div className={s.wrapper}>{children}</div>;
};
