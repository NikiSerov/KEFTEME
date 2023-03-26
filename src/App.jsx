import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout/MainLayout";
import { routes } from "./routes";
import { ConfigProvider } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserThunk } from "./store/thunks/authThunks";
import { themeConfig } from './constants/constants'

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserThunk());
  }, []);

  return (
    <ConfigProvider theme={themeConfig}>
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
