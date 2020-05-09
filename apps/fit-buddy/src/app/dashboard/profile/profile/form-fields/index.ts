import { FieldType } from '@glotrix/ui/forms';
import { firstNameField } from './first-name.field';
import { lastNameField } from './last-name.field';
import { heightField } from './height.field';
import { birthdayField } from './birthday.field';
import { weightField } from './weight.field';

export const entries: FieldType[] = [
	firstNameField,
	lastNameField,
	heightField,
	birthdayField,
	weightField
];
