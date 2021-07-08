"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var date_fns_1 = __importDefault(require("@date-io/date-fns"));
var pickers_1 = require("@material-ui/pickers");
var I18nContext_1 = require("../context/I18nContext");
var styles_1 = require("@material-ui/core/styles");
var Root = function (props) {
    var _a, _b;
    var theme = react_1.useMemo(function () {
        var _a;
        var localization = (_a = props === null || props === void 0 ? void 0 : props.locale) === null || _a === void 0 ? void 0 : _a.materialUiLocalization;
        return styles_1.createTheme({}, localization);
    }, [(_a = props === null || props === void 0 ? void 0 : props.locale) === null || _a === void 0 ? void 0 : _a.materialUiLocalization]);
    return (react_1["default"].createElement(styles_1.ThemeProvider, { theme: theme },
        react_1["default"].createElement(I18nContext_1.I18nProvider, { value: props.locale },
            react_1["default"].createElement(pickers_1.MuiPickersUtilsProvider, { utils: date_fns_1["default"], locale: (_b = props.locale) === null || _b === void 0 ? void 0 : _b.dateFnsLocale }, props.children))));
};
exports["default"] = Root;
