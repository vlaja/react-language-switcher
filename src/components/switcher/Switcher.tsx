import React from 'react';

import { useLanguageContext } from 'hooks';

import { SwitcherButton } from './SwitcherButton';
import { SwitcherElement } from './SwitcherElement';

interface SwitcherProps {
  containerClassName?: string;
  containerComponent?: React.ComponentType;
  listClassName?: string;
  listComponent?: React.ComponentType;
  itemClassName?: string;
  itemComponent?: React.ComponentType;
  buttonClassName?: string;
  buttonActiveClassName?: string;
  buttonComponent?: React.ComponentType;
  customSelector?: () => string[];
}

export const Switcher: React.FC<SwitcherProps> = ({
  containerClassName,
  containerComponent,
  listClassName,
  listComponent,
  itemClassName,
  itemComponent,
  buttonClassName,
  buttonActiveClassName,
  buttonComponent,
  customSelector,
}) => {
  const { languageList } = useLanguageContext();

  let values = languageList;
  if (customSelector) {
    values = customSelector() || values;
  }

  return (
    <SwitcherElement
      isHidden={!containerComponent && !containerClassName}
      component={containerComponent || 'div'}
      className={containerClassName}
    >
      <SwitcherElement
        component={listComponent || 'ul'}
        className={listClassName}
      >
        {values.map(value => (
          <SwitcherElement
            key={value}
            component={itemComponent || 'li'}
            className={itemClassName}
          >
            <SwitcherButton
              lang={value}
              component={buttonComponent || 'button'}
              className={buttonClassName}
              activeClassName={buttonActiveClassName}
            />
          </SwitcherElement>
        ))}
      </SwitcherElement>
    </SwitcherElement>
  );
};
