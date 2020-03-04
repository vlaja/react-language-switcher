import { useCallback, useState } from 'react';

import { RegisterMiddlewareFn, SwitcherContextProps } from 'context';

import { useSwitcherContext } from '../context/useSwitcherContext';

export function useSwitcherProvider(config?: Partial<SwitcherContextProps>) {
  const baseConfig = useSwitcherContext();

  /**
   * @description Combine default config with overrides passed from parent component
   */
  const providerConfig: SwitcherContextProps = {
    ...baseConfig,
    ...config,
  };

  /**
   * @description Internal state and logic for adding middleware
   */
  // const [middleware, addMiddleware] = useState<SwitcherMiddleware[]>([]);
  const [providerState, updateProviderState] = useState<
    Omit<SwitcherContextProps, 'registerMiddleware' | 'updateValue'>
  >(providerConfig);

  const registerMiddleware = useCallback<RegisterMiddlewareFn>(
    (name, props, component) => {
      updateProviderState(s => ({
        middleware: [...s.middleware, { name, component }],
        ...props,
      }));
    },
    []
  );

  const updateValue = (selector: string, val: string) => {
    updateProviderState(s => ({
      ...s,
      [selector]: val,
    }));
  };

  return { providerState, registerMiddleware, updateValue };
}
