import { FieldType } from '@glotrix/ui/forms';

export const weightField: FieldType = {
	controlType: 'textbox',
	key: 'weight',
	value: '',
	label: 'Weight',
	order: 2,
	col: 'col-sm-4',
	validations: {
		required: {
			message: 'Weight is required.',
			value: true
		}
	}
};
