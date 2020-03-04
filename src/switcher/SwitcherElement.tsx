import React from 'react';

interface SwitcherElementProps {
  className?: string;
  component: string | React.ComponentType;
  isHidden?: boolean;
}

export const SwitcherElement: React.FC<SwitcherElementProps> = ({
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
