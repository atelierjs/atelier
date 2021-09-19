import React from 'react';
import { RouteProps } from 'react-router-dom';

export type AppRoute = RouteProps & {
  name: string;
  meta?: Record<string, unknown>;
};

const routesArray: AppRoute[] = [
  {
    name: 'index',
    path: '/',
    exact: true,
    component: React.lazy(() => import('./views/Home')),
  },
];

const routes = routesArray.reduce<Record<string, AppRoute>>((acc, x) => {
  acc[x.name] = x;
  return acc;
}, {});

export default routes;
