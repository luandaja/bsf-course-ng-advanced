export const productFilterInitialState: ProductFilterState = {
  category: undefined,
  currentPage: 1,
  keyword: '',
  pageSize: 5
};
export interface ProductFilterState {
  keyword: string;
  category: string;
  currentPage: number;
  pageSize: number;
}
