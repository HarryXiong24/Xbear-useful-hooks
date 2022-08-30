import React from 'react';
import { routeMap } from '@/common/menus';
import NoMatch from '@/pages/404/index';
import { Route, Routes } from 'react-router-dom';

export const Router = () => {
  return (
    <Routes>
      {routeMap.map((router, index) => (
        <Route key={`${router.path!}${index}`} {...router} />
      ))}
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default Router;
