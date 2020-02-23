import { LanguageContextProps } from 'components';

/**
 * Sets english as default locale for your router and language switcher
 */
export const DEFAULT_ISO_LANGUAGE = 'en';

/**
 * Default config for the provider
 */
export const DEFAULT_CONFIG: LanguageContextProps = {
  language: DEFAULT_ISO_LANGUAGE,
  languageList: [DEFAULT_ISO_LANGUAGE],
};
