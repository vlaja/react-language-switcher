import { useEffect, useState } from 'react';

import { useSwitcherContext } from 'context';

import { LanguageSwitcherProps } from './LanguageSwitcher';

export function useLanguageSwitcher(
  props: Pick<
    LanguageSwitcherProps,
    'valueSelector' | 'defaultLanguage' | 'languageList'
  >
) {
  const { updateValue } = useSwitcherContext();

  /**
   * @description Set default language for this middleware to english
   */
  const {
    defaultLanguage = 'en',
    languageList = ['en'],
    valueSelector,
  } = props;

  /**
   * @description Function that resets language if it is not correct
   */
  const normalizeLanguage = (lang: string) =>
    lang.length === 2 ? lang : defaultLanguage;

  /**
   * @description Internal state and handler for setting language
   */
  const [currentLanguage, setCurrentLanguage] = useState(
    normalizeLanguage(defaultLanguage)
  );

  useEffect(() => {
    updateValue(valueSelector, currentLanguage);
  }, [currentLanguage]);

  const updateLanguage = (lang: string) =>
    setCurrentLanguage(normalizeLanguage(lang));

  /**
   * @description Register middleware
   */
  const { registerMiddleware } = useSwitcherContext();
  useEffect(() => {
    if (registerMiddleware) {
      registerMiddleware('LanguageSwitcher', {
        language: currentLanguage,
        languageList,
        updateLanguage,
      });
    }
  }, []);
}
