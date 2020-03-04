import React from 'react';

interface SwitcherButtonProps {
  currentValue: string;
  value: string;
  onClick: (...props: any[]) => void;
  className?: string;
  activeClassName?: string;
  component: string | React.ComponentType;
}

export const SwitcherButton: React.FC<SwitcherButtonProps> = ({
  className,
  activeClassName,
  component,
  value,
  currentValue,
  onClick,
}) => {
  const isActive = value === currentValue;
  const getButtonClasses = () => {
    if (typeof component !== 'string') {
      return null;
    }

    let buttonClassName = '';
    if (className) buttonClassName += className;
    if (isActive && activeClassName) {
      buttonClassName += ` ${activeClassName}`;
    }

    return buttonClassName;
  };

  const getValueFromDataset = (event: React.MouseEvent<HTMLElement>) => {
    const { value } = event.currentTarget.dataset;
    onClick(value);
  };

  const buttonProps = {
    'data-active': isActive,
    'data-value': value,
    className: getButtonClasses(),
    onClick: getValueFromDataset,
  };

  const Button = component;
  return <Button {...buttonProps}>{value}</Button>;
};
