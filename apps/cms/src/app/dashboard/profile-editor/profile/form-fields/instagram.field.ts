import { FieldType } from '@glotrix/ui/forms';

export const instagramField: FieldType = {
	controlType: 'textbox',
	key: 'instagram',
	value: '',
	label: 'Instagram',
	order: 5,
	col: 'col-sm-4',
	validations: {
		minlength: {
			message: 'Instagram must be at least three characters.',
			value: 3
		},
		required: {
			message: 'Instagram is required.',
			value: true
		},
		maxlength: {
			message: 'Instagram cannot exceed 30 characters.',
			value: 30
		}
	}
};
