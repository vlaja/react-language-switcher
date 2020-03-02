"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var hooks_1 = require("../../hooks");
var SwitcherButton_1 = require("./SwitcherButton");
var SwitcherElement_1 = require("./SwitcherElement");
exports.Switcher = function (_a) {
    var containerClassName = _a.containerClassName, containerComponent = _a.containerComponent, listClassName = _a.listClassName, listComponent = _a.listComponent, itemClassName = _a.itemClassName, itemComponent = _a.itemComponent, buttonClassName = _a.buttonClassName, buttonActiveClassName = _a.buttonActiveClassName, buttonComponent = _a.buttonComponent, customSelector = _a.customSelector;
    var languageList = hooks_1.useLanguageContext().languageList;
    var values = languageList;
    if (customSelector) {
        values = customSelector() || values;
    }
    return (react_1.default.createElement(SwitcherElement_1.SwitcherElement, { isHidden: !containerComponent && !containerClassName, component: containerComponent || 'div', className: containerClassName },
        react_1.default.createElement(SwitcherElement_1.SwitcherElement, { component: listComponent || 'ul', className: listClassName }, values.map(function (value) { return (react_1.default.createElement(SwitcherElement_1.SwitcherElement, { key: value, component: itemComponent || 'li', className: itemClassName },
            react_1.default.createElement(SwitcherButton_1.SwitcherButton, { lang: value, component: buttonComponent || 'button', className: buttonClassName, activeClassName: buttonActiveClassName }))); }))));
};
