import React from 'react';

import { useLanguageContext } from 'hooks';

interface SwitcherButtonProps {
  className?: string;
  activeClassName?: string;
  component: string | React.ComponentType;
  lang: string;
}

export const SwitcherButton: React.FC<SwitcherButtonProps> = ({
  className,
  activeClassName,
  component,
  lang,
}) => {
  const { language, setLanguage } = useLanguageContext();
  const isCurrentLanguage = lang === language;

  const buttonProps = {
    value: lang,
    className: getButtonClasses(),
    onClick: onButtonClick,
  };

  const Button = component;
  return (
    <Button data-current={isCurrentLanguage} {...buttonProps}>
      {lang}
    </Button>
  );

  function onButtonClick() {
    if (setLanguage) {
      setLanguage(lang);
      document.documentElement.lang = lang;
    }
  }

  function getButtonClasses() {
    if (typeof component !== 'string') {
      return null;
    }

    let buttonClassName = '';
    if (className) buttonClassName += className;
    if (isCurrentLanguage && activeClassName) {
      buttonClassName += ` ${activeClassName}`;
    }

    return buttonClassName;
  }
};
