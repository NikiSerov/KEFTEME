import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { ContentLayout } from "../ContentLayout/ContentLayout";
import s from "./MainLayout.module.scss";

export const MainLayout = () => {
  return (
    <div className={s.mainLayout}>
      <Header />
      <ContentLayout>
        <Outlet />
      </ContentLayout>
      <Footer />
    </div>
  );
};
