import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { ContentLayout } from "../ContentLayout/ContentLayout";
import s from "./MainLayout.module.scss";
import { Modal } from "../../components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { resetModal } from "../../store/slices/modalSlice";

export const MainLayout = () => {
  const { title, isShowed, modalText, type } = useSelector(
    (state) => state.modal
  );

  const dispatch = useDispatch();

  const onModalClose = () => {
    dispatch(resetModal());
  };

  return (
    <div className={s.mainLayout}>
      <Header />
      <ContentLayout>
        <Outlet />
      </ContentLayout>
      {isShowed && (
        <Modal
          title={title}
          type={type}
          text={modalText}
          onClose={onModalClose}
        />
      )}
      <Footer />
    </div>
  );
};
