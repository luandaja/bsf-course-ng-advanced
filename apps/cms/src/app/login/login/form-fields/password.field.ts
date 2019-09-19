import { FieldType } from '@glotrix/ui/forms';
export const passwordField: FieldType = {
	controlType: 'password',
	value: '',
	key: 'password',
	label: 'Password',
	order: 2,
	col: 'col-sm-12',
	validations: {
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
