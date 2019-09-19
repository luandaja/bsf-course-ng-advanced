import { FieldType } from '@glotrix/ui/forms';

import { descriptionField } from './description.field';
import { nameField } from './name.field';
import { priceField } from './price.field';
import { quantityField } from './quantity.field';

export const productFormFields: FieldType[] = [
	nameField,
	descriptionField,
	priceField,
	quantityField
];
