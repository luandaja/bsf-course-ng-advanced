import { FieldType } from '@glotrix/ui/forms';

export const nameField: FieldType = {
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
};
