import { RouteObject } from 'react-router';
import Home from '@/pages/Home/index';
import Demo from '@/pages/Demo/index';
import NoMatch from '@/pages/404/index';
import React from 'react';

const routes: RouteObject[] = [
  { path: '/', element: <Home />, index: true },
  { path: '/demo', element: <Demo /> },
  { path: '*', element: <NoMatch /> },
];

export default routes;
