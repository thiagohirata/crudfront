import React, { useMemo } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { I18nContext, I18nProvider } from "../context/I18nContext";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

type Props = React.PropsWithChildren<{
  locale?: I18nContext;
}>;

const Root = function (props: Props): JSX.Element {
  const theme = useMemo(() => {
    const localization = props?.locale?.materialUiLocalization;
    return createTheme({
      props: {
        MuiTextField: {
          variant: "outlined"
        }
      }
    }, localization);
  }, [props?.locale?.materialUiLocalization]);
  return (
    <ThemeProvider theme={theme}>
      <I18nProvider value={props.locale}>
        <MuiPickersUtilsProvider
          utils={DateFnsUtils}
          locale={props.locale?.dateFnsLocale}
        >
          {props.children}
        </MuiPickersUtilsProvider>
      </I18nProvider>
    </ThemeProvider>
  );
};

export default Root;
