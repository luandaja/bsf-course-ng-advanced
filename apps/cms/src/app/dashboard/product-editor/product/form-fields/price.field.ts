import { FieldType } from '@glotrix/ui/forms';

export const priceField: FieldType = {
	//This should be a currency entry. TBD
	controlType: 'textbox',
	value: '',
	key: 'price',
	label: 'Price',
	order: 3,
	col: 'col-sm-3',
	validations: {
		minlength: {
			message: 'Price must be at least three characters.',
			value: 2
		},
		required: {
			message: 'Price is required.',
			value: true
		}
	}
};
