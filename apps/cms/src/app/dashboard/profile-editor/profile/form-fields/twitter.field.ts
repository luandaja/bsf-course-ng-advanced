import { FieldType } from '@glotrix/ui/forms';

export const twitterField: FieldType = {
	controlType: 'textbox',
	key: 'twitter',
	value: '',
	label: 'Twitter',
	order: 4,
	col: 'col-sm-4',
	validations: {
		minlength: {
			message: 'Twitter must be at least three characters.',
			value: 3
		},
		required: {
			message: 'Twitter is required.',
			value: true
		},
		maxlength: {
			message: 'Twitter cannot exceed 30 characters.',
			value: 30
		}
	}
};
