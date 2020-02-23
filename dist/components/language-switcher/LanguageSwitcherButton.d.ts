import React from 'react';
interface LanguageSwitcherButtonProps {
    className?: string;
    activeClassName?: string;
    component: string | React.ComponentType;
    lang: string;
}
export declare const LanguageSwitcherButton: React.FC<LanguageSwitcherButtonProps>;
export {};
