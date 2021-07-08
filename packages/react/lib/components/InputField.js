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
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var InputDate_1 = __importDefault(require("./InputDate"));
var InputText_1 = __importDefault(require("./InputText"));
var InputField = function (props) {
    var type = props.type;
    var Comp;
    switch (type) {
        case 'text':
            Comp = InputText_1["default"];
            break;
        case 'date':
            Comp = InputDate_1["default"];
            break;
        default:
            Comp = null;
    }
    var compProps = __assign({}, props);
    delete compProps['type'];
    if (Comp)
        return react_1["default"].createElement(Comp, __assign({}, compProps));
    return null;
};
exports["default"] = InputField;
