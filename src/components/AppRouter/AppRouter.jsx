import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { authRoutes, publicRoutes } from '../../routes/routes';

function AppRouter() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Routes>
      {isLoggedIn && authRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
      {publicRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}

export default memo(AppRouter);
