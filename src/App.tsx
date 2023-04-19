import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout/MainLayout';
import { routes } from './routes';
import { ConfigProvider } from 'antd';
import { FC, useEffect } from 'react';
import { getUserThunk } from './store/thunks/authThunks';
import { useAppDispatch } from './store/store';

export const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserThunk());
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#36cfc9',
          colorLink: '#fff',
          colorLinkHover: '#36cfc9',
          borderRadius: 10,
          colorText: 'white',
          colorBorder: 'rgba(255, 255, 255, 0.165)',
          colorBorderBg: 'rgba(255, 255, 255, 0.165)',
          colorBorderSecondary: 'rgba(255, 255, 255, 0.165)',
          colorBgContainer: 'rgba(255, 255, 255, 0.1)',
          colorHighlight: '#36cfc9',
          fontFamily: 'Roboto, sans-serif',
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
