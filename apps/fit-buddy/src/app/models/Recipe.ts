export interface Recipe {
	id?: number;
	name?: string;
	calories?: number;
	persons?: number;
	description?: string;
	coverImage?: string;
	images?: string[];
	steps?: string[];
	ingredients?: {
		units: string;
		name: string;
	}[];
}
