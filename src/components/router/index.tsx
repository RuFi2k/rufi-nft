import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { IRouterConfig } from '../../types';
import routerConfig from './config';

export default function Router() {
  const buildRoutes = React.useCallback((config: IRouterConfig) => {
    const { path, element, children } = config;

    return (
      <Route path={path} element={element}>
        {children && children.map((child) => buildRoutes(child))}
      </Route>
    );
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {buildRoutes(routerConfig)}
      </Routes>
    </BrowserRouter>
  );
}
