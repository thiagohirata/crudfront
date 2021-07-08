"use strict";
exports.__esModule = true;
exports.useI18nContext = exports.I18nProvider = void 0;
var react_1 = require("react");
var Context = react_1.createContext(undefined);
exports["default"] = Context;
exports.I18nProvider = Context.Provider;
var useI18nContext = function () {
    return react_1.useContext(Context);
};
exports.useI18nContext = useI18nContext;
