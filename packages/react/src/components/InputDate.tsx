import React, { useCallback, useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { useI18nContext } from "../context/I18nContext";
import parseISO from "date-fns/parseISO";
import isValid from "date-fns/isValid";

interface InputProps<V> {
  value: V;
  setValue: { (v: V) };
  disabled?: boolean;
  required?: boolean;
}

export type Props = {
  label: string;
  min?: Date;
} & InputProps<string>;

const InputText = (props: Props): JSX.Element => {
  const { setValue } = props;
  const propValueDate = props.value ? parseISO(props.value) : null;
  const [v, setV] = useState<Date>(propValueDate);
  const onChange = useCallback(
    (v: Date) => {
      // setValue(date);
      setV(v);
      if (isValid(v)) {
        setValue(v.toISOString().substring(0, 10));
      } else {
        setValue(null);
      }
    },
    [setValue]
  );

  const i18n = useI18nContext();
  const pickerProps = { ...props };
  delete pickerProps["setValue"];
  delete pickerProps["value"];
  return (
    <>
      <KeyboardDatePicker
        {...pickerProps}
        value={isValid(propValueDate) ? propValueDate : v}
        onChange={onChange}
        format={i18n.shortDateFormat}
        invalidDateMessage={i18n.invalidDateMessage}
      />
    </>
  );
};

export default InputText;
