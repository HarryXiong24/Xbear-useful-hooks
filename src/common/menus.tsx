import React from 'react';
import { RouteObject } from 'react-router';
import UseSetStatePage from '@/pages/UseSetStatePage';
import UseBooleanPage from '@/pages/UseBooleanPage';
import UseLocalStoragePage from '@/pages/UseLocalStoragePage';
import UseMountPage from '@/pages/UseMountPage';
import UseUpdateEffectPage from '@/pages/UseUpdateEffectPage';
import UseUpdateLayoutEffectPage from '@/pages/UseUpdateLayoutEffectPage';
import UseUnmountPage from '@/pages/UseUnmountPage';

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
      {
        text: 'useLocalStorage',
        itemKey: '/state/useLocalStorage',
        element: <UseLocalStoragePage />,
      },
    ],
  },
  {
    itemKey: '/lifeCycle',
    text: 'LifeCycle',
    items: [
      {
        text: 'useMount',
        itemKey: '/state/useMount',
        element: <UseMountPage />,
      },
      {
        text: 'useUpdateEffect',
        itemKey: '/state/useUpdateEffect',
        element: <UseUpdateEffectPage />,
      },
      {
        text: 'useUpdateLayoutEffect',
        itemKey: '/state/useUpdateLayoutEffect',
        element: <UseUpdateLayoutEffectPage />,
      },
      {
        text: 'useUnmount',
        itemKey: '/state/useUnmount',
        element: <UseUnmountPage />,
      },
    ],
  },
  {
    itemKey: '/effect',
    text: 'Effect',
    items: [
      // {
      //   text: 'useMount',
      //   itemKey: '/state/useMount',
      //   element: <UseMountPage />,
      // },
    ],
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
