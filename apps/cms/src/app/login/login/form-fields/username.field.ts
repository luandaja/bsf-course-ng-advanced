import { FieldType } from '@glotrix/ui/forms';
export const usernameField: FieldType = {
	controlType: 'textbox',
	value: '',
	key: 'username',
	label: 'Email',
	placeholder: 'user@example.com',
	order: 1,
	col: 'col-sm-12',
	validations: {
		pattern: {
			message: 'The email is not valid',
			value: '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
		},
		minlength: {
			message: 'Password must be at least three characters.',
			value: 3
		},
		required: {
			message: 'Password is required.',
			value: true
		}
	}
};
