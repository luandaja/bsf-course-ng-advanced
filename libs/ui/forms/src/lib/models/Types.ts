export type ControlTypes = 'password' | 'textbox' | 'textblock' | 'dropdown';
export type ValidationName = 'required' | 'minlength' | 'maxlength' | 'pattern';
export type ValidationType = {
  [key in ValidationName]?: {
    message: string;
    value: any;
  };
};
