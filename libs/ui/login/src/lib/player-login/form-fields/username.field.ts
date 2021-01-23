import { FieldType } from '@glotrix/ui/forms';
export const usernameField: FieldType = {
	controlType: 'textbox',
	value: '',
	key: 'username',
	label: 'username',
	placeholder: 'username',
	order: 1,
	col: 'col-sm-12',
	validations: {
		minlength: {
			message: 'Username must be at least three characters.',
			value: 3
		},
		required: {
			message: 'Username is required.',
			value: true
		}
	}
};
