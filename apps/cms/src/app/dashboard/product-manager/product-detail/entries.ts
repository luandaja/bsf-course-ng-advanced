import { FieldType } from "@glotrix/ui/forms";

export const entries: FieldType[] = [
  {
    controlType: 'textbox',
    value: '',
    key: 'name',
    label: 'Name',
    order: 1,
    col: 'col-sm-12',
    validations: {
      minlength: {
        message: 'Name must be at least three characters.',
        value: 3
      },
      required: {
        message: 'Name is required.',
        value: true
      },
      maxlength: {
        message: 'Name cannot exceed 30 characters.',
        value: 30
      }
    }
  },
  {
    controlType: 'textblock',
    value: '',
    key: 'description',
    label: 'Description',
    rows: 5,
    order: 2,
    col: 'col-sm-12',
    validations: {
      minlength: {
        message: 'Name must be at least three characters.',
        value: 3
      },
      required: {
        message: 'Name is required.',
        value: true
      },
      maxlength: {
        message: 'Name cannot exceed 30 characters.',
        value: 30
      }
    }
  },
  {
    //This should be a currency entry. TBD
    controlType: 'textbox',
    value: '',
    key: 'price',
    label: 'Price',
    order: 3,
    col: 'col-sm-3',
    validations: {
      minlength: {
        message: 'Price must be at least three characters.',
        value: 2
      },
      required: {
        message: 'Price is required.',
        value: true
      }
    }
  },
  {
    controlType: 'textbox',
    value: '',
    key: 'quantity',
    label: 'Quantity',
    order: 4,
    col: 'col-sm-3',
    validations: {
      minlength: {
        message: 'Quantity must be at least three characters.',
        value: 4
      },
      required: {
        message: 'Quantity is required.',
        value: true
      }
    }
  }
];