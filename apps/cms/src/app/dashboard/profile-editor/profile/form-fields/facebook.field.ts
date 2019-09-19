import { FieldType } from '@glotrix/ui/forms';

export const facebookField: FieldType = {
	controlType: 'textbox',
	key: 'facebook',
	value: '',
	label: 'Facebook',
	order: 3,
	col: 'col-sm-4',
	validations: {
		minlength: {
			message: 'Facebook must be at least three characters.',
			value: 3
		},
		required: {
			message: 'Facebook is required.',
			value: true
		},
		maxlength: {
			message: 'Facebook cannot exceed 30 characters.',
			value: 30
		}
	}
};
