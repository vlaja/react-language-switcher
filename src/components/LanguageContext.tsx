import { createContext } from 'react';

import { DEFAULT_CONFIG } from 'const';

export interface LanguageContextProps {
  language: string;
  languageList: string[];
  middlewareList?: {
    middleware: React.ComponentType;
    passive: boolean;
  }[];
  setLanguage?: (lang: string) => void;
  registerMiddleware?: (
    component: React.ComponentType,
    passive: boolean,
    config?: Record<string, any>
  ) => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
  ...DEFAULT_CONFIG,
});
