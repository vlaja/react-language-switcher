import React from 'react';
interface SwitcherButtonProps {
    className?: string;
    activeClassName?: string;
    component: string | React.ComponentType;
    lang: string;
}
export declare const SwitcherButton: React.FC<SwitcherButtonProps>;
export {};
