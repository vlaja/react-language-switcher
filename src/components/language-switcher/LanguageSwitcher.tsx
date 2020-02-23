import React from 'react';

import { useLanguageContext } from 'hooks';

import { LanguageSwitcherButton } from './LanguageSwitcherButton';
import { LanguageSwitcherElement } from './LanguageSwitcherElement';

interface LanguageSwitcherProps {
  containerClassName?: string;
  containerComponent?: React.ComponentType;
  listClassName?: string;
  listComponent?: React.ComponentType;
  itemClassName?: string;
  itemComponent?: React.ComponentType;
  buttonClassName?: string;
  buttonActiveClassName?: string;
  buttonComponent?: React.ComponentType;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  containerClassName,
  containerComponent,
  listClassName,
  listComponent,
  itemClassName,
  itemComponent,
  buttonClassName,
  buttonActiveClassName,
  buttonComponent,
}) => {
  const { languageList } = useLanguageContext();

  return (
    <LanguageSwitcherElement
      isHidden={!containerComponent && !containerClassName}
      component={containerComponent || 'div'}
      className={containerClassName}
    >
      <LanguageSwitcherElement
        component={listComponent || 'ul'}
        className={listClassName}
      >
        {languageList.map(lang => (
          <LanguageSwitcherElement
            key={lang}
            component={itemComponent || 'li'}
            className={itemClassName}
          >
            <LanguageSwitcherButton
              lang={lang}
              component={buttonComponent || 'button'}
              className={buttonClassName}
              activeClassName={buttonActiveClassName}
            />
          </LanguageSwitcherElement>
        ))}
      </LanguageSwitcherElement>
    </LanguageSwitcherElement>
  );
};
