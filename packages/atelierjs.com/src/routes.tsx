import React from 'react';
import { RouteProps } from 'react-router-dom';

export type AppRoute = RouteProps & {
  name: string;
  fallback?: React.ReactNode;
  meta?: Record<string, unknown>;
};

const Home = React.lazy(() => import('./views/Home'));

const routesArray: AppRoute[] = [
  {
    name: 'index',
    path: '/',
    element: <Home />,
  },
];

const routes = routesArray.reduce<Record<string, AppRoute>>((acc, x) => {
  acc[x.name] = x;
  return acc;
}, {});

export default routes;
