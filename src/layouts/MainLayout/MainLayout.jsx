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
      {/* <img
        src="https://i.ibb.co/kgdggwC/vecteezy-4k-video-animation-wavy-abstract-animated-background-4428325-Adobe-Express.gif"
        alt="vecteezy-4k-video-animation-wavy-abstract-animated-background-4428325-Adobe-Express"
        id="background-video"
      /> */}
      <img
        src="https://lh3.googleusercontent.com/fife/AMPSemeViPLbahAwFo1gRfHhbc0TWuf9eoevpxk8SqNAugCCQMBeWFy-MZsPfZWnBif9Cf2AYyJiR6ghhKnlLw1nYFtcuOKLBB4U2y7tRI0ypjUuhd1hqxhPtyUWES9QXQDxOoyvt5LL9esUV_o6glXUvR_rmd1gZi6J8dhyjLs8jcrxQu3drtOBa_doam5H-l6aXavEuAX542EsJpGkPWlL6WGd98gRl3vytWUbtoS3AOJMFpoeC0IwLrLvJ28HSgpF11T1XfdZwpaBqa_3-Z3R8EvQpmlmQ3H7O2F3frVhfJsAPb7JL2cCx5hjhRtGHtmEtZfXZ8jOELlXy4UMsrZgGqhAbJs0ti7rZqBzEWnLgCHQ3nyswMt13WDsM_hCg9IBkCLEuxhRLiBnuSMtGbR-vdoG0X-6u5j0wtq7JXymkO6M5dg3NqAKLV8UJUSBpLwW0fn0RWj3zzV8p1_H5V-b8lTvdpEF6HKCff2H5nLBgGFAb9Zc0BTWl6puO0td3_LAQYGDmW9m-cV49Pmn1RLpVOxGy1Or_zTYf7SPOlwzzTHk25t-KQrwC9iVX9OZqsLVJSJmwF79k-BRo3Am20r1K1zVnK1FB_MYZwWpaZbNCx-9iQYC7zUy5okSsl9xW8uUgB6EWnZdycuYv1EDpBsWZ_EFQeqI7MN8V0r_WtRKtZLz7T5ltc7SIuG1aVTZkOWJ0eA9P4Cdba-SuishrqCoHYrQHY2bFt1OhZLwoQiuD2QJvBM7_kdd_sD-PXjIV0TGxYqYnD85cEMbonO1vAylowUXKlkfnWYUPmziFvTsLbDZmXcORO4rZMSVQTOBkHAArlMm3MMI0MGnvk0_f5cpCrAGKNrbhP9v6TUkvxSUwgvGThILEoR4EwRmfk7YlO15r-bVHytgheV7hJLhhhkNiqFAZpGK7qzgkndHpdjLPm1IMAdjx982XrUDCXSWapMweTTPxAhYzPWIcFLFwTF1hWwpAshD9v1dYsuhxSZf5qw1mV_btpTsZhFK_BZ66FC94tKPfJ08NorAwA8KrvWuHbz4VKCe5ATS73WZsV7UWjJ2jshyMMuuCrG_Hfda5TvxXO47ojOwPyXprAx1IPFnuHJaak3U1kt_LuchRPjWC76mccA3hMjAFKPZT3YOTGCISujIutiE_X1cyQskAi04QdT0kWoPnA6KS5uIJjq9iROGuaN3qsdKytS3XrceAoHfEN7yZ7gDSXWYBJV2DsRUiq_jhIziUQCPzLe7TilwTg5CDb7ndQKtwxU9t8ViNcpugmKHBrLXPRNNEcJdQyboYczFzMoPYrQeP2ICPVj-WUqITUjq-cSPBCrMK_bC-uWT8GmrhymQdPMwKB9hh5fhfeBUHrJG6zk7Zh_ETgjc1bDHdnQPZmZtroNmrTmSuTCO5RL-kotWuSgoBz5ikbrLpxWAjTAgkMXokEr-MtzyFpaziu2VTEob9zIKdhyvwSHE22Y4kQEBOtWHSsssVcIIAw=w1446-h969"
        alt="bg motion"
        id="background-video"
      />
      {/* <video
        id="background-video"
        autoPlay
        loop
        muted
        poster="https://assets.codepen.io/6093409/river.jpg"
      >
        <source
          src="https://assets.codepen.io/6093409/river.mp4"
          type="video/mp4"
        /> */}
      {/* </video> */}
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
