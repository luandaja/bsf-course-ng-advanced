export class EntryBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  disabled: boolean;
  controlType: string;
  col: string;
  validations: {
    message: string;
    name: string;
    value: string;
  }[];
  validationMessages: { [key: string]: string };
  maxlength: number;
  options?: any;

  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      required?: boolean;
      order?: number;
      controlType?: string;
      maxlength?: number;
      validationMessages?: { [key: string]: string };
      col?: string;
    } = {}
  ) {
    this.value = options.value;
    this.maxlength = options.maxlength;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.disabled = false;
    this.controlType = options.controlType || '';
    this.validationMessages = options.validationMessages;
    this.col = options.col;
  }
}
