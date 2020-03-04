import React from 'react';

import { SwitcherProps, Switcher } from 'switcher';

import { useLanguageSwitcher } from './useLanguageSwitcher';

export interface LanguageSwitcherProps extends SwitcherProps {
  languageList: string[];
  defaultLanguage?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  languageList,
  defaultLanguage,
  ...rest
}) => {
  const valueSelector = 'language';
  useLanguageSwitcher({
    languageList,
    defaultLanguage,
    valueSelector,
  });

  return (
    <Switcher
      valueSelector={valueSelector}
      listSelector={'languageList'}
      handlerSelector={'updateLanguage'}
      {...rest}
    />
  );
};
