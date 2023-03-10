import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout/MainLayout";
import { routes } from "./routes";
import { ConfigProvider } from "antd";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { getUser } from "./api/authAPI";
// import { addProduct } from "./store/slices/cartSlice";

export const App = () => {
  // getUser().then(console.log);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const localCart = localStorage.getItem("products");
  //   dispatch(addProduct(localCart));
  //   console.log(localCart);
  // }, []);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#9e1068",
          borderRadius: "0",
          colorLink: "#000",
          colorLinkHover: "#9e1068",
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
