export interface PaginationDtoInterface {
  currentPage: number
  perPage: number
  total: number
  firstPage: number | null
  previousPage: number | null
  nextPage: number | null
  lastPage: number | null
}

export interface PaginationInterface {
  paginationDto: PaginationDtoInterface
  route: string
}

export interface PaginationQueryParamsInterface {
  perPage: number
  page: number
}

export interface PaginationRouterLinkInterface {
  perPage: number
  page: number | null
  route: string
}
