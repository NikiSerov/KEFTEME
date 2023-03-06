import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout/MainLayout";
import { routes } from "./routes";
import { ConfigProvider } from "antd";

export const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#9e1068",
          borderRadius: "0",
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
