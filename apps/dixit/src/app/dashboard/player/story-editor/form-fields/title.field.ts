import { FieldType } from '@glotrix/ui/forms';

export const titleField: FieldType = {
	controlType: 'textbox',
	value: '',
	key: 'title',
	label: 'Title',
	order: 1,
	col: 'col-sm-12',
	validations: {
		minlength: {
			message: 'Title must be at least three characters.',
			value: 3
		},
		required: {
			message: 'Title is required.',
			value: true
		},
		maxlength: {
			message: 'Title cannot exceed 30 characters.',
			value: 100
		}
	}
};
