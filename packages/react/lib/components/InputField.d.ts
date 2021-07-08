/// <reference types="react" />
import type { Field } from '@crudfront/core';
interface InputProps<V> {
    value: V;
    setValue: {
        (v: V): any;
    };
    disabled?: boolean;
    required?: boolean;
}
export declare type Props<T> = Pick<Field<T>, 'type' | 'options' | 'hint' | 'minLength' | 'maxLength' | 'min' | 'max' | 'label'> & InputProps<T> & any;
declare const InputField: <T>(props: any) => JSX.Element;
export default InputField;
