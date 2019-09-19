import { FieldType } from '@glotrix/ui/forms';
import { firstNameField } from './first-name.field';
import { lastNameField } from './last-name.field';
import { facebookField } from './facebook.field';
import { twitterField } from './twitter.field';
import { instagramField } from './instagram.field';
import { websiteField } from './website.field';
import { descriptionField } from './description.field';

export const entries: FieldType[] = [
	firstNameField,
	lastNameField,
	facebookField,
	twitterField,
	instagramField,
	websiteField,
	descriptionField
];
