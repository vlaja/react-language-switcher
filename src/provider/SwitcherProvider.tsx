import React from 'react';

import { SwitcherContext, SwitcherContextProps } from 'context';

import { useSwitcherProvider } from './useSwitcherProvider';

interface SwitcherProviderConfig {
  config?: Partial<SwitcherContextProps>;
}

export const SwitcherProvider: React.FC<SwitcherProviderConfig> = ({
  children,
  config,
}) => {
  const {
    providerState,
    registerMiddleware,
    updateValue,
  } = useSwitcherProvider(config);

  return (
    <SwitcherContext.Provider
      value={{
        ...providerState,
        registerMiddleware,
        updateValue,
      }}
    >
      {providerState.middleware.reduceRight(
        (_, middleware) =>
          middleware.component ? (
            <middleware.component key={middleware.name}>
              {children}
            </middleware.component>
          ) : (
            children
          ),
        children
      )}
    </SwitcherContext.Provider>
  );
};
