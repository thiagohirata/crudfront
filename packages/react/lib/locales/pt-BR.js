"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var pt_BR_1 = __importDefault(require("date-fns/locale/pt-BR"));
var locale_1 = require("@material-ui/core/locale");
var LOCALE = 'pt-BR';
var locale = {
    dateFnsLocale: pt_BR_1["default"],
    locale: LOCALE,
    intlDateTimeFormat: new Intl.DateTimeFormat(LOCALE),
    shortDateFormat: 'dd/MM/yyyy',
    materialUiLocalization: locale_1.ptBR,
    invalidDateMessage: 'Data inválida'
};
exports["default"] = locale;
