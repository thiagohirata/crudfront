import React, { useCallback, useState, useMemo } from 'react'
import { KeyboardDatePicker, KeyboardDatePickerProps } from '@material-ui/pickers'
import { useI18nContext } from '../context/I18nContext'
import parseISO from 'date-fns/parseISO'
import isValid from 'date-fns/isValid'

interface InputProps<V> {
  value: V;
  setValue: { (v: V) };
  disabled?: boolean;
  required?: boolean;
}

export type Props = Pick<
  KeyboardDatePickerProps,
  'label' | 'required' | 'disabled' | 'placeholder' | 'fullWidth' | 'size'
> & {
  label: string;
  min: string;
  max: string;
} & InputProps<string>

const InputText = (props: Props): JSX.Element => {
  const { setValue, max, min, value } = props
  const { label, required, disabled, placeholder, fullWidth, size } = props

  const maxDate = useMemo(() => (max ? parseISO(max) : undefined), [max])
  const minDate = useMemo(() => (min ? parseISO(min) : undefined), [min])
  const propValueDate = useMemo(() => (value ? parseISO(value) : null), [value])
  const [v, setV] = useState<Date>(propValueDate)
  const onChange = useCallback(
    (v: Date) => {
      // setValue(date);
      setV(v)
      if (isValid(v)) {
        setValue(v.toISOString().substring(0, 10))
      } else {
        setValue(null)
      }
    },
    [setValue]
  )

  const i18n = useI18nContext()
  return (
    <>
      <KeyboardDatePicker
        {...{ label, required, disabled, placeholder, fullWidth, size }}
        {...{ minDate, maxDate }}
        value={isValid(propValueDate) ? propValueDate : v}
        onChange={onChange}
        format={i18n.shortDateFormat}
        invalidDateMessage={i18n.invalidDateMessage}
      />
    </>
  )
}

export default InputText
