import { createContext, ComponentType } from 'react';

export type SwitcherComponent = string | ComponentType | undefined;

export interface SwitcherMiddleware {
  name: string;
  component?: SwitcherComponent;
}

export type RegisterMiddlewareFn = (
  name: string,
  props?: Record<string, any>,
  component?: SwitcherComponent
) => void;

export type UpdateValueFn = (selector: string, val: string) => void;

export interface SwitcherContextProps {
  middleware: SwitcherMiddleware[];
  registerMiddleware: RegisterMiddlewareFn;
  updateValue: UpdateValueFn;
}

export const SwitcherContext = createContext<SwitcherContextProps>({
  middleware: [],
  registerMiddleware: () => undefined,
  updateValue: () => undefined,
});
