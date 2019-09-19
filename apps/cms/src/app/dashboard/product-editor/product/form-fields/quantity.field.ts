import { FieldType } from '@glotrix/ui/forms';

export const quantityField: FieldType = {
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
};
