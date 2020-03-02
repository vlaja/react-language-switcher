"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Sets english as default locale for your router and language switcher
 */
exports.DEFAULT_ISO_LANGUAGE = 'en';
/**
 * Default config for the provider
 */
exports.DEFAULT_CONFIG = {
    language: exports.DEFAULT_ISO_LANGUAGE,
    languageList: [exports.DEFAULT_ISO_LANGUAGE],
    middlewareList: [],
    setLanguage: function () { return undefined; },
    registerMiddleware: function () { return undefined; },
};
