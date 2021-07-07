import React, { createContext, useContext, useState, useMemo } from "react";
import type * as DateFns from "date-fns";
import type * as MaterialUI from "@material-ui/core/locale";

export type I18nContext = {
  locale: string;
  dateFnsLocale: DateFns.Locale;
  shortDateFormat: string;
  intlDateTimeFormat?: Intl.DateTimeFormat;
  materialUiLocalization?: MaterialUI.Localization;
  invalidDateMessage?: string;
  maxDateMessage?: string;
};
const Context = createContext<I18nContext>(undefined);

export default Context;
export const I18nProvider = Context.Provider;
export const useI18nContext = function (): I18nContext {
  return useContext(Context);
};
