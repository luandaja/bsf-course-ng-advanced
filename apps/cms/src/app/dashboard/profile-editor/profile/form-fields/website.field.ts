import { FieldType } from '@glotrix/ui/forms';

export const websiteField: FieldType = {
	controlType: 'textbox',
	key: 'website',
	value: '',
	label: 'Website',
	order: 6,
	col: 'col-sm-4',
	validations: {
		minlength: {
			message: 'Website must be at least three characters.',
			value: 3
		},
		required: {
			message: 'Website is required.',
			value: true
		},
		maxlength: {
			message: 'Website cannot exceed 30 characters.',
			value: 30
		}
	}
};
