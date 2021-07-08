import React, { useCallback } from 'react'
import TextField from '@material-ui/core/TextField'
import { maskValue, unmaskValue } from '@crudfront/util/lib/mask'
// interface Option<T> {
//   value: T;
//   label: string;
//   [other: string]: any;
// }

export type Props<T = string> = Pick<
  React.AllHTMLAttributes<HTMLInputElement>,
  'required' | 'disabled' | 'pattern' | 'placeholder'
> & {
  value?: T;
  setValue?: { (v: T) };
  label?: string;
  mask?: string;
  hint?: string;
  // allCaps?: boolean;
  // inputType?: 'select' | 'chip' | 'color' | 'textarea' | 'price' | 'email' | 'tel' | 'password' | 'cpf';
  // loadOptions?;
  // onOption?: { (o: Option<T>) };
  // options?: Option<T>[];
  // showNullOption?: boolean;
}

const InputText = (props: Props): JSX.Element => {
  const { setValue, mask, value, label, pattern, required, disabled, placeholder, hint } = props
  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      e?.preventDefault?.()
      const value = e?.currentTarget?.value
      if(mask) {
        //todo salvar a seleção
      }
      const realValue = value == null ? null : mask ? maskValue(value, mask) : value
      setValue(realValue)
    },
    [setValue, mask]
  )

  const inputValue = value == null ? '' : mask ? maskValue(value, mask) : value

  return (
    <TextField
      {...{
        pattern,
        required,
        disabled,
        placeholder,
        label,
      }}
      value={inputValue}
      helperText={hint}
      onChange={onChange}
    />
  )
}

export default InputText
