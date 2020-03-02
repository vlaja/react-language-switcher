"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var hooks_1 = require("../../hooks");
exports.SwitcherButton = function (_a) {
    var className = _a.className, activeClassName = _a.activeClassName, component = _a.component, lang = _a.lang;
    var _b = hooks_1.useLanguageContext(), language = _b.language, setLanguage = _b.setLanguage;
    var isCurrentLanguage = lang === language;
    var buttonProps = {
        value: lang,
        className: getButtonClasses(),
        onClick: onButtonClick,
    };
    var Button = component;
    return (react_1.default.createElement(Button, __assign({ "data-current": isCurrentLanguage }, buttonProps), lang));
    function onButtonClick() {
        if (setLanguage) {
            setLanguage(lang);
            document.documentElement.lang = lang;
        }
    }
    function getButtonClasses() {
        if (typeof component !== 'string') {
            return null;
        }
        var buttonClassName = '';
        if (className)
            buttonClassName += className;
        if (isCurrentLanguage && activeClassName) {
            buttonClassName += " " + activeClassName;
        }
        return buttonClassName;
    }
};
