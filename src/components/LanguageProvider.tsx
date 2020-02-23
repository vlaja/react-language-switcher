import React, { useState } from 'react';

import { DEFAULT_ISO_LANGUAGE, DEFAULT_CONFIG } from 'const';

import { LanguageContextProps, LanguageContext } from './LanguageContext';

interface LanguageProviderConfig {
  config?: LanguageContextProps;
}

export const LanguageProvider: React.FC<LanguageProviderConfig> = ({
  children,
  config,
}) => {
  const { language, languageList } = config || DEFAULT_CONFIG;
  const [currentLanguage, setCurrentLanguage] = useState(
    normalizeLanguage(language || DEFAULT_ISO_LANGUAGE),
  );

  return (
    <LanguageContext.Provider
      value={{
        language: currentLanguage,
        languageList,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );

  function normalizeLanguage(lang: string) {
    return lang.length === 2 ? lang : DEFAULT_ISO_LANGUAGE;
  }

  function setLanguage(lang: string) {
    setCurrentLanguage(normalizeLanguage(lang));
  }
};
