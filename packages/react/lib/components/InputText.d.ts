import React from 'react';
export declare type Props<T = string> = Pick<React.AllHTMLAttributes<HTMLInputElement>, 'required' | 'disabled' | 'pattern' | 'placeholder'> & {
    value?: T;
    setValue?: {
        (v: T): any;
    };
    label?: string;
    mask?: string;
    hint?: string;
};
declare const InputText: (props: Props) => JSX.Element;
export default InputText;
