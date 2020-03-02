import React from 'react';
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
export declare const Switcher: React.FC<SwitcherProps>;
export {};
