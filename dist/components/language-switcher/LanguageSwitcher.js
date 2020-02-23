"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var hooks_1 = require("hooks");
var LanguageSwitcherButton_1 = require("./LanguageSwitcherButton");
var LanguageSwitcherElement_1 = require("./LanguageSwitcherElement");
exports.LanguageSwitcher = function (_a) {
    var containerClassName = _a.containerClassName, containerComponent = _a.containerComponent, listClassName = _a.listClassName, listComponent = _a.listComponent, itemClassName = _a.itemClassName, itemComponent = _a.itemComponent, buttonClassName = _a.buttonClassName, buttonActiveClassName = _a.buttonActiveClassName, buttonComponent = _a.buttonComponent;
    var languageList = hooks_1.useLanguageContext().languageList;
    return (react_1.default.createElement(LanguageSwitcherElement_1.LanguageSwitcherElement, { isHidden: !containerComponent && !containerClassName, component: containerComponent || 'div', className: containerClassName },
        react_1.default.createElement(LanguageSwitcherElement_1.LanguageSwitcherElement, { component: listComponent || 'ul', className: listClassName }, languageList.map(function (lang) { return (react_1.default.createElement(LanguageSwitcherElement_1.LanguageSwitcherElement, { key: lang, component: itemComponent || 'li', className: itemClassName },
            react_1.default.createElement(LanguageSwitcherButton_1.LanguageSwitcherButton, { lang: lang, component: buttonComponent || 'button', className: buttonClassName, activeClassName: buttonActiveClassName }))); }))));
};
