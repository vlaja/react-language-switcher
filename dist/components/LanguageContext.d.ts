/// <reference types="react" />
/// <reference types="@emotion/core" />
export interface LanguageContextProps {
    language: string;
    languageList: string[];
    middlewareList: React.ComponentType[];
    setLanguage: (lang: string) => void;
    registerMiddleware: (component: React.ComponentType, config?: Record<string, any>) => void;
}
export declare const LanguageContext: import("react").Context<LanguageContextProps>;
