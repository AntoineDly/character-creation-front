import { RouteLocationNormalizedLoadedGeneric } from 'vue-router'

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
  perPage: number
  page: number | null
}

export interface UsePaginationInterface {
  getQueryParams: () => PaginationQueryParamsInterface
  getQueryParamsFromRoute: (route: RouteLocationNormalizedLoadedGeneric) => PaginationQueryParamsInterface
  setPageAndPerPageInput: (route: RouteLocationNormalizedLoadedGeneric) => void
  pushRouteWithNewPagination: (page: number, perPage: number) => Promise<void>
}

export interface PaginationPerPageFormDataInterface {
  perPage: number
}
