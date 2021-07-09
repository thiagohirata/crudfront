import React, { Fragment, useCallback } from 'react'
import type { Type, Field } from '@crudfront/core'
import InputField from './InputField'
import Grid from '@material-ui/core/Grid'

interface InputProps<V> {
  value: V;
  setValue: { (fn: { (v: V): V }) };
  disabled?: boolean;
  required?: boolean;
}

type MyField = Pick<
  Field<any>,
  | 'type'
  | 'options'
  | 'hint'
  | 'minLength'
  | 'maxLength'
  | 'min'
  | 'max'
  | 'label'
  | 'name'
  | 'required'
  | 'disabled'
> & { [k: string]: any }

type WrapFieldFunction = { (field: MyField, input: React.ReactNode): React.ReactNode }
interface FieldLayout {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}
type LayoutFunction = { (field: MyField): FieldLayout }

export type Props<T> = {
  wrapField?: WrapFieldFunction;
  layoutField?: LayoutFunction;
  fields: MyField[];
  spacing: number;
  direction: 'row' | 'column';
} & InputProps<T> &
  any

const DEFAULT_WRAP_FIELD: WrapFieldFunction = (field, input) => <>{input}</>

const InputObject = function <T>(props: Props<T>): JSX.Element {
  const {
    fields,
    value,
    setValue,
    wrapField = DEFAULT_WRAP_FIELD,
    spacing = 1,
    direction = 'row',
  } = props
  const setField = useCallback(
    function <V>(name, valueOrFn) {
      setValue((v) => {
        return {
          ...(v || {}),
          [name]: typeof valueOrFn == 'function' ? valueOrFn(v?.[name]) : valueOrFn,
        }
      })
    },
    [setValue]
  )

  return (
    <Grid container spacing={spacing} direction={direction}>
      {fields?.map((field, index) => {
        const { xs, sm, md, lg, xl } = props?.layoutField?.(field) || {}
        const fullWidth = xs || sm || md || lg || xl ? true : undefined
        const comp = (
          <InputField
            fullWidth={fullWidth}
            key={field.name}
            {...field}
            value={value?.[field.name]}
            setValue={setField.bind(this, field.name)}
          />
        )
        return (
          <Grid item {...{ xs, sm, md, lg, xl }} key={field.name}>
            {wrapField(field, comp)}
          </Grid>
        )
      })}
    </Grid>
  )
}

export default InputObject
