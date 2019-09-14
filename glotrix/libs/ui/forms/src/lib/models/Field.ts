import { ControlTypes, ValidationType } from './Types';
export interface Field<T = string> {
  value: T;
  key: string;
  label: string;
  order: number;
  controlType: ControlTypes;
  disabled?: boolean;
  col?: string;
  placeholder?: string;
  validations?: ValidationType;
}

export interface TextblockField extends Field {
  rows: number;
}

export interface DropdownField extends Field {
  options?: {
    key: string;
    value: string;
  };
}

export interface PasswordField extends Field {
  pattern: string;
}

export interface EmailField extends Field {
  pattern: string;
}

export type FieldType = TextblockField | DropdownField | PasswordField | Field;
