export interface PaginationDtoInterface {
  currentPage: number
  perPage: number
  total: number
  firstPage: number | null
  previousPage: number | null
  nextPage: number | null
  lastPage: number | null
}

export interface PaginationQueryParamsInterface {
  perPage: number
  page: number
}

export interface PaginationButtonInterface {
  page: number
}

export interface UsePaginationInterface {
  getQueryParamsFromPaginationDto: (paginationDto: PaginationDtoInterface) => PaginationQueryParamsInterface
}
