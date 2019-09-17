export const productTableFilterInitialState: ProductTableFilterState = {
  category: undefined,
  currentPage: 1,
  keyword: '',
  pageSize: 5
};
export interface ProductTableFilterState {
  keyword: string;
  category: string;
  currentPage: number;
  pageSize: number;
}
