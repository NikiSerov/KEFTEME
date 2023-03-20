import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { ContentLayout } from "../ContentLayout/ContentLayout";
import s from "./MainLayout.module.scss";
import { Modal } from "../../components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { resetModal } from "../../store/slices/modalSlice";
import bg74 from "../../assets/videos/bg74.mp4";
import bg74_preview from "../../assets/images/bg74_preview.jpg";

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
      <video id="background-video" autoPlay loop muted poster={bg74_preview}>
        <source src={bg74} type="video/mp4" />
      </video>
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
