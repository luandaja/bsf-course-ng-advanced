import { FieldType } from '@glotrix/ui/forms';

export const birthdayField: FieldType = {
	controlType: 'textbox',
	key: 'birthday',
	value: '',
	label: 'Birthday',
	order: 2,
	col: 'col-sm-4',
	validations: {
		required: {
			message: 'Birthday is required.',
			value: true
		}
	}
};
