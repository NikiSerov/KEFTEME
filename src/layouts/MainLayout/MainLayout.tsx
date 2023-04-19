import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { ContentLayout } from '../ContentLayout/ContentLayout';
import s from './MainLayout.module.scss';
import { Modal } from '../../components/Modal/Modal';
import { resetModal } from '../../store/slices/modalSlice';
import bgVideo from '../../assets/videos/bgVideo.mp4';
import bg74_preview from '../../assets/images/bg74_preview.jpg';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { FC } from 'react';

export const MainLayout: FC = () => {
  const { title, isShowed, modalText, type } = useAppSelector(
    (state) => state.modal,
  );

  const dispatch = useAppDispatch();

  const onModalClose = () => {
    dispatch(resetModal());
  };

  return (
    <div className={s.mainLayout}>
      <Header />
      <video
        id="background-video"
        autoPlay
        loop
        muted
        poster={bg74_preview}
        playsInline
        disablePictureInPicture
      >
        <source src={bgVideo} type="video/mp4" />
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
