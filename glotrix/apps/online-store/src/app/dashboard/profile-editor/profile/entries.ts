import { FieldType } from '@glotrix/ui/forms';

export const entries: FieldType[] = [
  {
    controlType: 'textbox',
    key: 'firstName',
    value: '',
    label: 'First name',
    order: 1,
    col: 'col-sm-4',
    validations: {
      minlength: {
        message: 'First name must be at least three characters.',
        value: 3
      },
      required: {
        message: 'First name is required.',
        value: true
      },
      maxlength: {
        message: 'First name cannot exceed 30 characters.',
        value: 30
      }
    }
  },
  {
    controlType: 'textbox',
    key: 'lastName',
    value: '',
    label: 'Last name',
    order: 2,
    col: 'col-sm-4',
    validations: {
      minlength: {
        message: 'Last name must be at least three characters.',
        value: 3
      },
      required: {
        message: 'Last name is required.',
        value: true
      },
      maxlength: {
        message: 'Last name cannot exceed 30 characters.',
        value: 30
      }
    }
  }
];
