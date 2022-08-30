import { RouteObject } from 'react-router';
import Home from '@/pages/Home';
import Demo from '@/pages/Demo';
import React from 'react';

export const menus = [
  {
    itemKey: '/Main',
    text: '首页',
    items: [
      {
        text: 'Home',
        itemKey: '/home',
        element: <Home />,
      },
      {
        text: 'Demo',
        itemKey: '/demo',
        element: <Demo />,
      },
    ],
  },
  {
    itemKey: '/Histogram',
    text: '基础数据',
  },
  {
    itemKey: '/Live',
    text: '测试功能',
  },
  {
    itemKey: '/Setting',
    text: '设置',
  },
];

export const createRoutes = (source: Record<string, any>[]) => {
  const routes: RouteObject[] = source
    .map((data) => {
      if (data.items && data.items.length) {
        return createRoutes(data.items);
      } else {
        if (data.element) {
          const { itemKey: path, ...r } = data;
          return [{ path, ...r }];
        }
        return [];
      }
    })
    .flat();
  return routes;
};

export const routeMap = createRoutes(menus);
