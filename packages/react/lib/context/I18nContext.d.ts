import React from "react";
import type * as DateFns from "date-fns";
import type * as MaterialUI from "@material-ui/core/locale";
export declare type I18nContext = {
    locale: string;
    dateFnsLocale: DateFns.Locale;
    shortDateFormat: string;
    intlDateTimeFormat?: Intl.DateTimeFormat;
    materialUiLocalization?: MaterialUI.Localization;
    invalidDateMessage?: string;
    maxDateMessage?: string;
};
declare const Context: React.Context<I18nContext>;
export default Context;
export declare const I18nProvider: React.Provider<I18nContext>;
export declare const useI18nContext: () => I18nContext;
