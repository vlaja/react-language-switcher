"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var const_1 = require("const");
var LanguageContext_1 = require("./LanguageContext");
exports.LanguageProvider = function (_a) {
    var children = _a.children, config = _a.config;
    var _b = config || const_1.DEFAULT_CONFIG, language = _b.language, languageList = _b.languageList;
    var _c = react_1.useState(normalizeLanguage(language || const_1.DEFAULT_ISO_LANGUAGE)), currentLanguage = _c[0], setCurrentLanguage = _c[1];
    return (react_1.default.createElement(LanguageContext_1.LanguageContext.Provider, { value: {
            language: currentLanguage,
            languageList: languageList,
            setLanguage: setLanguage,
        } }, children));
    function normalizeLanguage(lang) {
        return lang.length === 2 ? lang : const_1.DEFAULT_ISO_LANGUAGE;
    }
    function setLanguage(lang) {
        setCurrentLanguage(normalizeLanguage(lang));
    }
};
//# sourceMappingURL=LanguageProvider.js.map