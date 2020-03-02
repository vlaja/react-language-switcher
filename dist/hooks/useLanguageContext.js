"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var components_1 = require("../components");
function useLanguageContext() {
    return react_1.useContext(components_1.LanguageContext);
}
exports.useLanguageContext = useLanguageContext;
