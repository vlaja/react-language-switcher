import React, { useState } from 'react';

import { DEFAULT_CONFIG } from 'const';

import { LanguageContext, LanguageContextProps } from './LanguageContext';

interface LanguageProviderConfig {
  config?: LanguageContextProps;
}

export const LanguageProvider: React.FC<LanguageProviderConfig> = ({
  children,
  config,
}) => {
  /**
   * @description Combine default config with overrides passed from parent component
   */
  const providerConfig = {
    ...DEFAULT_CONFIG,
    ...config,
  };

  /**
   * @description Internal state for language and used middleware
   */
  const [currentLanguage, setCurrentLanguage] = useState(
    normalizeLanguage(providerConfig.language)
  );

  const [currentMiddleware, setCurrentMiddleware] = useState({
    middlewareList: providerConfig.middlewareList,
    middlewareProps: {},
  });

  return (
    <LanguageContext.Provider
      value={{
        ...providerConfig,
        ...currentMiddleware.middlewareProps,
        middlewareList: currentMiddleware.middlewareList,
        language: currentLanguage,
        setLanguage,
        registerMiddleware,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );

  /**
   * @description Internal API
   */
  function normalizeLanguage(lang: string) {
    return lang.length === 2 ? lang : providerConfig.language;
  }

  function setLanguage(lang: string) {
    setCurrentLanguage(normalizeLanguage(lang));
  }

  function registerMiddleware(
    middleware: React.ComponentType,
    config?: Record<string, any>
  ) {
    setCurrentMiddleware(s => ({
      middlewareList: [...s.middlewareList, middleware],
      middlewareProps: { ...s.middlewareProps, ...(config || {}) },
    }));
  }
};
