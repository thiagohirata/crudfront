import React, { useCallback } from "react";
import TextField from "@material-ui/core/TextField";

interface InputProps<V> {
  value: V;
  setValue: { (v: V) };
  disabled?: boolean;
  required?: boolean;
}

export type Props = {
  label: string;
} & InputProps<string>;

const InputText = (props: Props): JSX.Element => {
  const { setValue } = props;
  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      e?.preventDefault?.();
      setValue(e?.currentTarget?.value);
    },
    [setValue]
  );

  return <TextField {...props} value={props.value || ""} onChange={onChange} />;
};

export default InputText;
