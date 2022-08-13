import { ReactNode } from 'react';

export interface IRouterConfig {
  path: string
  element: ReactNode
  children?: IRouterConfig[]
}
