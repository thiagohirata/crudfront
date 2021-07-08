import React from "react";
import { I18nContext } from "../context/I18nContext";
declare type Props = React.PropsWithChildren<{
    locale?: I18nContext;
}>;
declare const Root: (props: Props) => JSX.Element;
export default Root;
