import { FieldType } from '@glotrix/ui/forms';

export const heightField: FieldType = {
	controlType: 'textbox',
	key: 'heigth',
	value: '',
	label: 'Height',
	order: 2,
	col: 'col-sm-4',
	validations: {
		required: {
			message: 'Height is required.',
			value: true
		}
	}
};
