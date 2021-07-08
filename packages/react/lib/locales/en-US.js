"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var en_US_1 = __importDefault(require("date-fns/locale/en-US"));
var locale_1 = require("@material-ui/core/locale");
var LOCALE = 'en-US';
var locale = {
    dateFnsLocale: en_US_1["default"],
    locale: LOCALE,
    intlDateTimeFormat: new Intl.DateTimeFormat(LOCALE),
    shortDateFormat: 'MM/dd/yyyy',
    materialUiLocalization: locale_1.enUS
};
exports["default"] = locale;
