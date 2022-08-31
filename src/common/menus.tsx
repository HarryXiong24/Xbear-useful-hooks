import { RouteObject } from 'react-router';
import Home from '@/pages/Home';
import Demo from '@/pages/Demo';
import React from 'react';

export const menus = [
  {
    itemKey: '/state',
    text: 'State',
    items: [
      {
        text: 'Home',
        itemKey: '/state/home',
        element: <Home />,
      },
      {
        text: 'Demo',
        itemKey: '/state/demo',
        element: <Demo />,
      },
    ],
  },
  {
    itemKey: '/effect',
    text: 'Effect',
  },
  {
    itemKey: '/lifeCycle',
    text: 'LifeCycle',
  },
  {
    itemKey: '/dom',
    text: 'Dom',
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
