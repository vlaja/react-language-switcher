import { createContext } from 'react';

import { DEFAULT_CONFIG } from 'const';

export interface LanguageContextProps {
  language: string;
  languageList: string[];
  middlewareList: React.ComponentType[];
  setLanguage: (lang: string) => void;
  registerMiddleware: (
    component: React.ComponentType,
    config?: Record<string, any>
  ) => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
  ...DEFAULT_CONFIG,
});
