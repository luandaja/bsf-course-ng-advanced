export const orderTableFilterInitialState: OrderTableFilterState = {
  status: undefined,
  currentPage: 1,
  keyword: '',
  pageSize: 5
};
export interface OrderTableFilterState {
  keyword: string;
  status: string;
  currentPage: number;
  pageSize: number;
}
