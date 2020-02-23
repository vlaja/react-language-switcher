/// <reference types="react" />
/// <reference types="@emotion/core" />
export interface LanguageContextProps {
    language: string;
    languageList: string[];
    setLanguage?: (lang: string) => void;
}
export declare const LanguageContext: import("react").Context<LanguageContextProps>;
