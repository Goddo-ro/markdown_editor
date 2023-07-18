import React from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes/routes";
import {useAuth} from "../hooks/useAuth";

const AppRouter = () => {
  const {isAuth} = useAuth();

  return (
    <Routes>
      {
        isAuth
          ? privateRoutes.map(route =>
            <Route key={route.path} path={route.path} element={route.element} />
          )
          : publicRoutes.map(route =>
          <Route key={route.path} path={route.path} element={route.element} />
        )
      }
    </Routes>
  );
};

export default AppRouter;