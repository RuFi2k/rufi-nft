import React from 'react';
import { IRouterConfig } from '../../types';

const Home = React.lazy(() => import('../DummyComponent'));

const config: IRouterConfig = {
  path: '/',
  element: (
    <React.Suspense fallback={<>...</>}>
      <Home />
    </React.Suspense>
  ),
};

export default config;
