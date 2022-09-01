import React from 'react';
import { RouteObject } from 'react-router';
import UseSetStatePage from '@/pages/UseSetStatePage';
import UseBooleanPage from '@/pages/UseBooleanPage';

export const menus = [
  {
    itemKey: '/state',
    text: 'State',
    items: [
      {
        text: 'useSetState',
        itemKey: '/state/useSetState',
        element: <UseSetStatePage />,
      },
      {
        text: 'useBoolean',
        itemKey: '/state/useBoolean',
        element: <UseBooleanPage />,
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
