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
var TextField_1 = __importDefault(require("@material-ui/core/TextField"));
var mask_1 = require("@crudfront/util/lib/mask");
var InputText = function (props) {
    var setValue = props.setValue, mask = props.mask, value = props.value, label = props.label, pattern = props.pattern, required = props.required, disabled = props.disabled, placeholder = props.placeholder, hint = props.hint;
    var onChange = react_1.useCallback(function (e) {
        var _a, _b;
        (_a = e === null || e === void 0 ? void 0 : e.preventDefault) === null || _a === void 0 ? void 0 : _a.call(e);
        var value = (_b = e === null || e === void 0 ? void 0 : e.currentTarget) === null || _b === void 0 ? void 0 : _b.value;
        if (mask) {
            //todo salvar a seleção
        }
        var realValue = value == null ? null : mask ? mask_1.maskValue(value, mask) : value;
        setValue(realValue);
    }, [setValue, mask]);
    var inputValue = value == null ? '' : mask ? mask_1.maskValue(value, mask) : value;
    return (react_1["default"].createElement(TextField_1["default"], __assign({}, {
        pattern: pattern,
        required: required,
        disabled: disabled,
        placeholder: placeholder,
        label: label
    }, { value: inputValue, helperText: hint, onChange: onChange })));
};
exports["default"] = InputText;
