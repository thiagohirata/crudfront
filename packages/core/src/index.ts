export type Type =
  | 'text'
  | 'textarray'
  | 'floatarray'
  | 'float'
  | 'datetime'
  | 'date'
  | 'boolean'
  | 'object'
  | 'objectarray'
  | 'int'
  | 'intarray'
  | 'epochseconds'

export interface Field<T = any, E = any> {
  name: string;
  type: Type;
  label?: string;
  options?: Array<{ label?: string; value?: any; [customField: string]: any }>;
  fields?: Array<Field>;
  id: boolean;
  insertable: boolean;
  updatable: boolean;
  render: { (entity: E, ignored?: string): any } | false;
  renderForm: { (entity: E, ignored?: string): any } | false;
  renderColumn: { (entity: E, ignored?: string): any } | false;
  renderStyle: { (entity: E, fieldName?: string): string } | false;
  initialize?: { (): T };
  onEntityChange?: { (oldEntity: Partial<E>, newEntity: Partial<E>): Partial<E> };
  pattern?: string;
  withNullSelector?: boolean;
  nullSelectorDeselectValue?: T;
  nullSelectorLabel?: string;
  hint?: string;
  description?: string;
  groupName?: string;
  maxLength?: number;
  minLength?: number;
  min?: number | string;
  max?: number | string;
  [customField: string]: any;
}
