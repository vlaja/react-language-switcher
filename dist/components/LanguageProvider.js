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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var const_1 = require("../const");
var LanguageContext_1 = require("./LanguageContext");
exports.LanguageProvider = function (_a) {
    var children = _a.children, config = _a.config;
    /**
     * @description Combine default config with overrides passed from parent component
     */
    var providerConfig = __assign(__assign({}, const_1.DEFAULT_CONFIG), config);
    /**
     * @description Internal state for language and used middleware
     */
    var _b = react_1.useState(normalizeLanguage(providerConfig.language)), currentLanguage = _b[0], setCurrentLanguage = _b[1];
    var _c = react_1.useState({
        middlewareList: providerConfig.middlewareList,
        middlewareProps: {},
    }), currentMiddleware = _c[0], setCurrentMiddleware = _c[1];
    return (react_1.default.createElement(LanguageContext_1.LanguageContext.Provider, { value: __assign(__assign(__assign({}, providerConfig), currentMiddleware.middlewareProps), { middlewareList: currentMiddleware.middlewareList, language: currentLanguage, setLanguage: setLanguage,
            registerMiddleware: registerMiddleware }) }, children));
    /**
     * @description Internal API
     */
    function normalizeLanguage(lang) {
        return lang.length === 2 ? lang : providerConfig.language;
    }
    function setLanguage(lang) {
        setCurrentLanguage(normalizeLanguage(lang));
    }
    function registerMiddleware(middleware, config) {
        setCurrentMiddleware(function (s) { return ({
            middlewareList: __spreadArrays(s.middlewareList, [middleware]),
            middlewareProps: __assign(__assign({}, s.middlewareProps), (config || {})),
        }); });
    }
};
