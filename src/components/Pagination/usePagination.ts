import {
  PaginationDtoInterface,
  PaginationQueryParamsInterface,
  UsePaginationInterface,
} from '@/components/Pagination/pagination.interface'

export const usePagination = (): UsePaginationInterface => {
  const getQueryParamsFromPaginationDto = (paginationDto: PaginationDtoInterface): PaginationQueryParamsInterface => {
    return {
      perPage: paginationDto.perPage,
      page: paginationDto.currentPage,
    }
  }

  return {
    getQueryParamsFromPaginationDto,
  }
}
