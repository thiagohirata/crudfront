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
var pickers_1 = require("@material-ui/pickers");
var I18nContext_1 = require("../context/I18nContext");
var parseISO_1 = __importDefault(require("date-fns/parseISO"));
var isValid_1 = __importDefault(require("date-fns/isValid"));
var InputText = function (props) {
    var setValue = props.setValue;
    var propValueDate = props.value ? parseISO_1["default"](props.value) : null;
    var _a = react_1.useState(propValueDate), v = _a[0], setV = _a[1];
    var onChange = react_1.useCallback(function (v) {
        // setValue(date);
        setV(v);
        if (isValid_1["default"](v)) {
            setValue(v.toISOString().substring(0, 10));
        }
        else {
            setValue(null);
        }
    }, [setValue]);
    var i18n = I18nContext_1.useI18nContext();
    var pickerProps = __assign({}, props);
    delete pickerProps["setValue"];
    delete pickerProps["value"];
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(pickers_1.KeyboardDatePicker, __assign({}, pickerProps, { value: isValid_1["default"](propValueDate) ? propValueDate : v, onChange: onChange, format: i18n.shortDateFormat, invalidDateMessage: i18n.invalidDateMessage }))));
};
exports["default"] = InputText;
