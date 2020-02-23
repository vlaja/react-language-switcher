import React from 'react';

interface LanguageSwitcherElementProps {
  className?: string;
  component: string | React.ComponentType;
  isHidden?: boolean;
}

export const LanguageSwitcherElement: React.FC<LanguageSwitcherElementProps> = ({
  component,
  children,
  isHidden,
  ...props
}) =>
  isHidden ? (
    <React.Fragment>{children}</React.Fragment>
  ) : (
    React.createElement<typeof props>(component, props, children)
  );
