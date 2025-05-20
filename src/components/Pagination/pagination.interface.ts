export interface PaginationDtoInterface {
  currentPage: number
  perPage: number
  total: number
  firstPage: number | null
  previousPage: number | null
  nextPage: number | null
  lastPage: number | null
}
