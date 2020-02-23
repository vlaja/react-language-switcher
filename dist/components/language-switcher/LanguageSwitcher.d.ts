import React from 'react';
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
export declare const LanguageSwitcher: React.FC<LanguageSwitcherProps>;
export {};
