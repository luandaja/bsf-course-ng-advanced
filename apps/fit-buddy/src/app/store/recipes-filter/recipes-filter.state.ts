export const recipesFilterInitialState: RecipesFilterState = {
	category: undefined,
	currentPage: 1,
	keyword: '',
	pageSize: 9
};
export interface RecipesFilterState {
	keyword: string;
	category: string;
	currentPage: number;
	pageSize: number;
}
