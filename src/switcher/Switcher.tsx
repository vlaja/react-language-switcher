import React from 'react';

import { SwitcherButton } from './SwitcherButton';
import { SwitcherElement } from './SwitcherElement';
import { useSwitcherSelector } from './useSwitcherSelector';

export interface SwitcherProps {
  valueSelector: string;
  listSelector: string;
  handlerSelector: string;
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

export const Switcher: React.FC<SwitcherProps> = ({
  valueSelector,
  listSelector,
  handlerSelector,
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
  const { listValues, ...rest } = useSwitcherSelector(
    valueSelector,
    listSelector,
    handlerSelector
  );

  console.log(rest);

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
        {listValues.map(value => (
          <SwitcherElement
            key={value}
            component={itemComponent || 'li'}
            className={itemClassName}
          >
            <SwitcherButton
              component={buttonComponent || 'button'}
              className={buttonClassName}
              activeClassName={buttonActiveClassName}
              value={value}
              {...rest}
            />
          </SwitcherElement>
        ))}
      </SwitcherElement>
    </SwitcherElement>
  );
};
