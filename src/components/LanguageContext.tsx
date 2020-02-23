import { createContext } from 'react';

import { DEFAULT_ISO_LANGUAGE } from 'const';

export interface LanguageContextProps {
  language: string;
  languageList: string[];
  setLanguage?: (lang: string) => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: DEFAULT_ISO_LANGUAGE,
  languageList: [DEFAULT_ISO_LANGUAGE],
});
