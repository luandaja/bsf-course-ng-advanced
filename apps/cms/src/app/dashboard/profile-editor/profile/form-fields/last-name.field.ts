import { FieldType } from '@glotrix/ui/forms';

export const lastNameField: FieldType = {
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
};
