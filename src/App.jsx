import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout/MainLayout";
import { routes } from "./routes";
import { ConfigProvider } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserThunk } from "./store/thunks/userThunks";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserThunk());
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#36cfc9",
          colorLink: "#fff",
          colorLinkHover: "#36cfc9",
          borderRadius: "10px",
          // borderRadiusOuter: "10px",
          colorText: "white",
          colorBorder: "rgba(255, 255, 255, 0.165)",
          colorBorderBg: "rgba(255, 255, 255, 0.165)",
          colorBorderSecondary: "rgba(255, 255, 255, 0.165)",
          colorBgContainer: "rgba(255, 255, 255, 0.1)",
          colorHighlight: "#36cfc9",
        },
      }}
    >
      <div>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {routes.map((route) => {
              return (
                <Route
                  path={route.path}
                  element={route.component}
                  index={route.index}
                  key={route.path}
                />
              );
            })}
          </Route>
        </Routes>
      </div>
    </ConfigProvider>
  );
};
