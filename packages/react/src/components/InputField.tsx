import React from 'react'
import type { Type, Field } from '@crudfront/core'
import InputDate from './InputDate'
import InputText from './InputText'

interface InputProps<V> {
  value: V
  setValue: { (v: V) }
  disabled?: boolean
  required?: boolean
}

export type Props<T> = Pick<
  Field<T>,
  'type' | 'options' | 'hint' | 'minLength' | 'maxLength' | 'min' | 'max' | 'label'
> &
  InputProps<T> &
  any

const InputField = function <T>(props: Props<T>): JSX.Element {
  const { type } = props
  let Comp: React.ComponentType<any>
  switch (type) {
    case 'text':
      Comp = InputText
      break
    case 'date':
      Comp = InputDate
      break
    default:
      Comp = null
  }
  const compProps = {...props}
  delete compProps['type']

  if (Comp) return <Comp {...compProps} />
  return null
}

export default InputField
