import React from 'react';

import { useLanguageContext } from 'hooks';

interface LanguageSwitcherButtonProps {
  className?: string;
  activeClassName?: string;
  component: string | React.ComponentType;
  lang: string;
}

export const LanguageSwitcherButton: React.FC<LanguageSwitcherButtonProps> = ({
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
    onClick: setLanguage?.bind(undefined, lang),
  };

  const Button = component;
  return (
    <Button data-current={isCurrentLanguage} {...buttonProps}>
      {lang}
    </Button>
  );

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
