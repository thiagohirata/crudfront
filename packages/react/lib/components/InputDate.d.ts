/// <reference types="react" />
interface InputProps<V> {
    value: V;
    setValue: {
        (v: V): any;
    };
    disabled?: boolean;
    required?: boolean;
}
export declare type Props = {
    label: string;
    min?: Date;
} & InputProps<string>;
declare const InputText: (props: Props) => JSX.Element;
export default InputText;
