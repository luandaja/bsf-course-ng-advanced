import { FieldType } from '@glotrix/ui/forms';

export const descriptionField: FieldType = {
	controlType: 'textblock',
	key: 'description',
	value: '',
	label: 'Description',
	order: 7,
	col: 'col-sm-4',
	validations: {
		minlength: {
			message: 'Description must be at least three characters.',
			value: 3
		},
		required: {
			message: 'Description is required.',
			value: true
		},
		maxlength: {
			message: 'Description cannot exceed 30 characters.',
			value: 30
		}
	}
};
