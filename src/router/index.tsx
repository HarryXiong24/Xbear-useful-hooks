import React from 'react';
import { routeMap } from '@/common/menus';
import { Navigate, Route, Routes } from 'react-router-dom';

export const Router = () => {
  return (
    <Routes>
      {routeMap.map((router, index) => (
        <Route key={`${router.path!}${index}`} {...router} />
      ))}
      <Route path="*" element={<Navigate to="/state/home" />} />
    </Routes>
  );
};

export default Router;
