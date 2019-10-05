import { FieldType } from '@glotrix/ui/forms';
export const avatarField: FieldType = {
	controlType: 'textbox',
	value: '',
	key: 'avatar',
	label: 'Avatar',
	order: 2,
	col: 'col-sm-12',
	validations: {
		minlength: {
			message: 'Avatar must be at least three characters.',
			value: 3
		},
		required: {
			message: 'Avatar is required.',
			value: true
		}
	}
};
